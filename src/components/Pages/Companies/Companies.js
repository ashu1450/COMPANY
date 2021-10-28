import React from 'react'
import './Companies.css';
import *as ReactBootStrap from "react-bootstrap";
import { ExternalLink } from 'react-external-link';


export default function Companies() {
    return (
      <>

      <div className="div-body">

            <h2 className="comp-head">Find your ways to get placed</h2>
            </div>

        <div className=" comp-table ">

      <ReactBootStrap.Table responsive striped bordered hover size="sm" className="rounded">
  <thead>
    <tr className="tr-head">
      <th>S.No</th>
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>Comapny</th>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>Loaction</th>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>Average Package</th>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>General Criteria</th>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>Website</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Infosys</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Bangalore-Karanatak</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>5 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}> Above 70% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://www.infosys.com/"/></td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>TCS</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Banglore-Karnataka</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>4 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Above 75% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://www.tcs.com/" /></td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Kaar Technologies</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Chennai-Tamil Nadu</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>3.5 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Above 65% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://www.kaartech.com/" /></td>
      ))}
    </tr>
    <tr>
      <td>4</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Wipro</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Bengaluru, India</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>5 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Above 65% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://www.wipro.com/" /></td>
      ))}
    </tr>
    <tr>
      <td>5</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>OpenText Technologies</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Pune, India</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>3 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Above 65% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://www.opentext.com/" /></td>
      ))}
    </tr>
    <tr>
      <td>6</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Hcl technologies</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Noida, India</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>5.5 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Above 65% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://www.hcltech.com/" /></td>
      ))}
    </tr>
    <tr>
      <td>7</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Zentropy Technologies</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Kondapur, Telangana</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>3 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Above 65% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://www.zentropytech.com/" /></td>
      ))}
    </tr>
    <tr>
      <td>8</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Hexaware Technologies</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Navi Mumbai, India</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>4 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Above 65% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://hexaware.com/" /></td>
      ))}
    </tr>
    <tr>
      <td>9</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Amazon India</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Hyderabad</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>8 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Above 85% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://www.amazon.jobs/en/teams/in" /></td>
      ))}
    </tr>
    <tr>
      <td>10</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Neosme Technologies</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Salem , India</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>2 lacs per annum</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>Above 60% in 10th and +2</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><ExternalLink href="https://www.neosme.com/" /></td>
      ))}
    </tr>

  </tbody>
 </ReactBootStrap.Table>
        </div>

        </>
    )
}
