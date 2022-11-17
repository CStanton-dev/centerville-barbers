import Layout from "../components/layout"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/MeetTheTeam.module.css"

export default function MeetTheTeam() {
  return (
    <Layout>
      <Head>
        <title>Centerville Barbers | Meet The Team</title>
				<meta name='description' content='Meet the team of barbers who will make you look your best!' />
      </Head>
      <div className='row'>
        <div className='col-md-12 justify-content-center align-items-center d-flex flex-column'>
          <h1 className={styles.title}>Meet The Team</h1>
            <p className={styles.description}>Here you can get a little info on our team of barbers, and our website developer!</p>
            <div className="container meetTheTeamContainer">
				<div className="row featurette" style={{textAlign: 'right'}}>
					<div className="col-md-7">
						<h2 className="featurette-heading">Tim Minton</h2>
						<p className="lead">Tim has owned Centerville Barbers since September of 2010. He has been cutting hair for x years, and loves cutting hair for a living. Tim is a family man, and on occasion, you'll see one of his kids in the barbershop.</p>
						<ul className="list-unstyled lead">Tim is here:
							<li>Tuesdays   - 8:00 AM to 7:00 PM</li>
							<li>Wednesdays - 8:00 AM to 7:00 PM</li>
							<li>Thursdays  - 8:00 AM to 7:00 PM</li>
							<li>Fridays    - 8:00 AM to 7:00 PM</li>
							<li>Saturdays  - 8:00 AM to 5:00 PM</li>
						</ul>
					</div>
					<div className="col-md-5">
						<Image className="featurette-image img-fluid mx-auto" alt="Tim Minton" width="100%" height="100%" layout="responsive" src="/timMinton.jpg" data-holder-rendered="true" />
					</div>
				</div>
				<hr className="featurette-divider" />
				<div className="row featurette" style={{textAlign: 'left'}}>
					<div className="col-md-7 order-md-2 ">
						<h2 className="featurette-heading">Scott Miesmer</h2>
						<p className="lead">Scott has been working at Centerville Barbers since 2017 and has been cutting hair for x years. Scott takes pride in his craft, and always looks to improve.</p>
						<ul className="list-unstyled lead text-left">Scott is here:
							<li>9:00 AM to 7:00 PM - Mondays</li>
							<li>9:00 AM to 7:00 PM - Wednesdays</li>
							<li>9:00 AM to 7:00 PM - Fridays</li>
							<li>8:00 AM to 5:00 PM - Saturdays</li>
							<li>11:00 AM to 6:00 PM - Sundays</li>
						</ul>
					</div>
					<div className="col-md-5 order-md-1">
            <Image className="featurette-image img-fluid mx-auto" alt="Scott Miesmer" width="100%" height="100%"  layout="responsive" src="/scottMiesmer.jpg" data-holder-rendered="true" />
					</div>
				</div>
				<hr className="featurette-divider" />
				<div className="row featurette" style={{textAlign: 'right'}}>
					<div className="col-md-7">
						<h2 className="featurette-heading">Carter Stanton</h2>
						<p className="lead">Carter has been developing websites since late 2018. Carter loves coding and is well versed in a wide range of programing languages. From time to time, you will see him in the barbershop getting a haircut or working with Tim or Scott on the website.</p>
					</div>
					<div className="col-md-5">
            <Image className="featurette-image img-fluid mx-auto" alt="Carter Stanton" width="100%" height="100%"  layout="responsive"src="/carterStanton.jpg" data-holder-rendered="true" />
					</div>
				</div>
			</div>
        </div>
      </div>
    </Layout>
  )
}