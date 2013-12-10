package controllers

import play.api._
import play.api.data._
import play.api.data.Forms._
import libs.json.Json
import play.api.mvc._

case class UserData(name: String)
object Application extends Controller {
  var name = "josh"
  val userForm = Form(
    mapping(
      "name" -> text
    )(UserData.apply)(UserData.unapply)
  )
  def index = Action {
    Ok(views.html.index())
  }

  def notes = Action {
  	Ok(views.html.notes())
  }

  def assignments(assignment:Int) = Action {
  	if(assignment == 0) Ok(views.html.assignments());
  	else if(assignment == 1) Ok(views.html.assignment1());
    else if(assignment == 2) Ok(views.html.assignment2());
    else if(assignment == 3) Ok(views.html.assignment3());
    //else if(assignment == 4) Ok(views.html.assignment4());
    //else if(assignment == 5) Ok(views.html.assignment5());
  	else NotFound;
  }

  def websiteinstr = Action{
    Ok(views.html.website_instr());
  }
  def getName() = Action{
    Ok(name)
  }
  def getNameJson() = Action{
    Ok(Json.obj("name" -> name))
  }
  def setName = Action{ implicit request =>
    name = userForm.bindFromRequest().get.name
    println("got name: "+name);
    Ok(views.html.form_received_name(name))
  }

  def calculateDistance(lat:Double, lon:Double) = Action{
    //calculate distance from lattitude: 37.467399,longitude: -121.93344
    val Radius = 3959  //in miles
    val dlat = Math.toRadians(lat - 37.467399)
    val dlon = Math.toRadians(lon + 121.93344)
    val lat2 = Math.toRadians(lat)
    val lat1 = Math.toRadians(37.4673399)
    val a = Math.pow(Math.sin(dlat/2),2)+(Math.pow(Math.sin(dlon/2),2)*Math.cos(lat1)*Math.cos(lat2))
    val c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    val distance = Radius*c
    Ok(distance.toString)
  }
}