import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand" href="#"><img src="images/istockphoto-1194135819-612x612.jpg" alt="logo" className="logo"/>Horizon Offices</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav m-auto">
		      	<a href=""><img src="images/1200px-Flag_of_the_United_Kingdom.svg.png" alt="..." className="flag"/></a>
		  		<a href=""><img src="images/255px-Flag_of_Ghana.svg.png" alt="..." className="flag"/></a>
		  		<a href=""><img src="images/Flag-Kenya.jpg" alt="..." className="flag"/></a>
		  </ul>
		  </div>
		  <li className="nav-item active">
		        <a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
		      </li>
		 

	</nav>
	<div className="container-fluid">
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-lg-12 carousel">
				<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
					  <div className="carousel-inner image-heigth">
					    <div className="carousel-item active">
					        <img src="images/pexels-4451745.jpg" className="d-block w-100" alt="..."/>
					    </div>
					    <div className="carousel-item">
					      <img src="images/stockvault-186211.jpg" className="d-block w-100" alt="..."/>
					    </div>
					    <div className="carousel-item">
					      <img src="images/stockvault-traffic188088.jpg" className="d-block w-100" alt="..."/>
					    </div>
					  </div>
				</div>
			</div>
		</div>
	</div>
	<div className="container">
		<p className="text-center size"><strong>Plans</strong></p>
		<div className="row">
			<div className="col-xs-3 col-sm-3 col-lg-3 thumbnail">
				<div className="card" style={{width: "14rem;"}}>
					<img src="images/stockvault-meeting-room-colorized233097.jpg" className="card-img-top" alt="..."/>
					<div className="card-body">
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
					</div>
			</div>
			<div className="col-xs-3 col-sm-3 col-lg-3 thumbnail">
				<div className="card" style={{width: "14rem;"}}>
				  <img src="images/stockvault-illustration-of-office-with-workstations-multiple-displays-and-phones285560.png" className="card-img-top" alt="..."/>
				  <div className="card-body">
				    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
			</div>
			<div className="col-xs-3 col-sm-3 col-lg-3 thumbnail">
				<div className="card" style={{width: "14rem;"}}>
				  <img src="images/stockvault-sitting-area235332.jpg" className="card-img-top" alt="..."/>
				  <div className="card-body">
				    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
			</div>
			<div className="col-xs-3 col-sm-3 col-lg-3 thumbnail">
				<div className="card" style={{width: "14rem"}}>
				  <img src="images/stockvault-home-office-photo284700.jpg" className="card-img-top" alt="..."/>
				  <div className="card-body">
				    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
			</div>
		</div>
	</div>
	<div className="container bg-color">
		<div className="row">
			<div className="col-xs-4 col-sm-4 col-lg-4">
				<p className="text-center">VISIT US IN LONDON<br/></p>
				<p className="text-center">9 Chiswick Park <br/>566 Chiswick High Road <br/>London, W4 5XT United <br/>Kingdom Phone: +44 (0)20 3249 9000</p>
			</div>
			<div className="col-xs-4 col-sm-4 col-lg-4">
				<p className="text-center">VISIT US IN GHANA<br/></p>
				<p className="text-center">Plot No.70 <br/>George Walker Bush Highway <br/>North Dzorwulu Accra Ghana <br/>Phone: +233 (0) 302 742 200 <br/>Fax: +233 (0) 302 742 300</p>
			</div>
			<div className="col-xs-4 col-sm-4 col-lg-4 footer">
				<p className="text-center">VISIT US IN KENYA<br/></p>
				<p className="text-center">B.V. 7th Floor, <br/>West End Towers Waiyaki Way <br/>P.O Box 63298-00619 Nairobi<br/> Kenya Phone: +254 (0) 204 286 000</p>
			</div>
		</div>
	</div>
    </div>
  );
}

export default App;
