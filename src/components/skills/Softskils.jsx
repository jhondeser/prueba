import React, { useEffect } from 'react'
import Chart from 'chart.js/auto';
import './softskills.css'

const Soft_skills = () => {
  useEffect(() => {
    let container_chart = document.getElementById('skillsChart');
    const Data = {
      labels: [
        'Effective Communication',
        'Problem-Solving Attitude',
        'change management',
        'Empathy',
        'Being Coachable',
        'Active Learning'
      ],
      datasets: [{
        label: 'MY Soft Skills',
        data: [86, 80, 63, 65, 76, 90],
        fill: true,
        backgroundColor: 'rgba(153, 0, 0, 0.2)',
        borderColor: 'rgb(153, 0, 0)',
        pointBackgroundColor: 'rgb(153, 0, 0)',
        pointBorderColor: '#960c0c',
        pointHoverBackgroundColor: '#960c0c',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
    }
    var radarChart = new Chart(container_chart, {
      type: 'radar',
      data: Data
    });
  })
  return (
    <section id = 'soft-skills'>
      <div className="continer">
        <div className="chart_container">
          <canvas id="skillsChart"></canvas>
        </div>
      </div>
    </section>
  )
}

export default Soft_skills