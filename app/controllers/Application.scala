package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {
  
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
    //else if(assignment == 3) Ok(views.html.assignment3());
  	else NotFound;
  }

  def websiteinstr = Action{
    Ok(views.html.website_instr());
  }
  
}