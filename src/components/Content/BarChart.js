import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
const BarChart = (props) => {
  console.log(props.content)
  const male = [
    props.content['household_ordinary_m'],
    props.content['household_single_m'],
  ]
  const female = [
    props.content['household_ordinary_f'],
    props.content['household_single_f'],
  ]
  return (
    <div style={{ width: '800px', height: '600px' }}>
      <Bar
        width="800px"
        height="600px"
        data={{
          labels: ['共同生活戶', '獨立生活戶'],
          datasets: [
            {
              label: '男',
              data: male,
              backgroundColor: 'rgba(63,123,191,0.8)',
              borderColor: 'rgba(74,62,187,1)',
            },
            {
              label: '女',
              data: female,
              backgroundColor: 'rgba(250,71,85,0.8)',
              borderColor: 'rgba(242,7,11,1)',
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 20,
                boxHeight: 20,
                font: {
                  size: 14,
                  weight: 'bold',
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              suggestedMax: props.max,
              ticks: {
                font: { size: 20, weight: 'bold' },
              },
            },
            x: {
              ticks: {
                font: { size: 20, weight: 'bold' },
              },
            },
          },
        }}
      />
    </div>
  )
}
export default BarChart
