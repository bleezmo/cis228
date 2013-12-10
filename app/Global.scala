import play.api.mvc._
import scala.Some

object AccessControlFilter extends EssentialFilter {

  def apply(next: EssentialAction) = new EssentialAction {

    def apply(request: RequestHeader) = {
      next(request).map(result =>
        result.withHeaders("Access-Control-Allow-Origin" -> "*")
          .withHeaders(("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS"))
          .withHeaders(("Access-Control-Allow-Headers", "x-requested-with,Content-Type,Authorization")))
    }
  }
}
object Global extends WithFilters(AccessControlFilter){

  override def onRouteRequest(request: RequestHeader): Option[Handler] = {
    request.method match {
      //return the default access control headers for all OPTION requests.
      case "OPTIONS" => Some(Action(new play.api.mvc.Results.Status(200)))
      case _ => {
        super.onRouteRequest(request)
      }
    }
  }
}
