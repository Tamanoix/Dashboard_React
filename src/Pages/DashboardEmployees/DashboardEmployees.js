import React, { useContext, useState } from 'react';
import './DashboardEmployees.css';
import { DashboardContext } from "../../context/DashboardContext";
import PieChart from '../../Components/AllChart/PieChart';


const DashboardEmployees = () => {
    
    const {dataChart, changeYear, yearData} = useContext(DashboardContext);

    return (
        <div className='global-container'>

            <h1>Les résultats de l'année : {yearData}</h1>

            <form>
                <label htmlFor="year">Choisissez une date</label>
                <select id="year" onChange={changeYear}>
                    <option selected={yearData === "2020" && "selected"} value="2020">2020</option>
                    <option selected={yearData === "2019" && "selected"} value="2019">2019</option>
                    <option selected={yearData === "2018" && "selected"} value="2018">2018</option>
                    <option selected={yearData === "2017" && "selected"} value="2017">2017</option>
                </select>
            </form>

            <h2>Les secteurs qui ont recruté :</h2>
            <PieChart
                labels={["Marketing", "Sécurité", "Front-End"]}
                data={dataChart.chart5}
            />
            <h2>L'âge des nouveaux employés :</h2>
            <PieChart
                labels={["Moins de 20 ans", "Entre 20 et 30 ans", "Entre 30 et 60 ans"]}
                data={dataChart.chart6}
            />
            <h2>Le niveau d'études :</h2>
            <PieChart
                labels={["Bac", "Licence", "Master"]}
                data={dataChart.chart7}
            />
            <h2>La nationalité :</h2>
            <PieChart 
                labels={["Français", "Allemand", "Anglais"]} 
                data={dataChart.chart8} 
            />

        </div>
    );

};

export default DashboardEmployees;