import React, { useEffect } from "react";
const Intro = () => (
    <div className="jumbotron">
      <h1 className="display-4">Kids-DAO</h1>
      <p className="lead">
      A decentralized, serverless web and mobile app based on IPFS and Bitcoin. 
      </p>
      <hr className="my-4" />
      <p>
       The idea is to make live of parents of digital nomads and their kids easier while living and travelling accross the globe.</p>
       <p>
        We are aiming to bring together basic needs of parents and their kids such as: 
        <li>education (schools, workshops,..)</li>
        <li>childcare (baby sitter, kindergarten,...</li>
        <li>transportation (bycicles, scooters, car rental, public transportation)</li>
        <li>communication (sim cards, coworking spaces)</li>
        <li>accomodation</li> 
        <li>travel restrictions (visa, covid, ...)</li> 
      </p>
      <p><b>Content:</b>
        <li>Free for users - content providers receive a percentage of revenue when users are booking services - users who paid for services can up and down vote user generated content</li>
      </p>
      <p>
        <b>Services:</b>
        <li>User pay for services</li>
        <li>Service providers receive payments from users in BTC</li>
      </p>
      <p>
      <b>FAQ:</b>
      </p>
      <ul>
        What means decentralized?
          <li>the commuication between users is happening only between them and without middlemen.</li>
          <li>no central database - service offers and requests are stored on users devices</li>
      </ul>
      <ul>
        If user devices are all offline are there backup nodes?
          <li>in a further version it is planed that users run a Kids-DAO node and receive rewards</li>
      </ul>

    </div>
  );
  export default Intro;