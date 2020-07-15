let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily='Lato';
Chart.defaults.global.defaultFontSize=18;
Chart.defaults.global.defaultFontColor='#777'

let massPopChart = new Chart(myChart, {
    type: 'horizontalBar',
    data:{
        labels:['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell'],
        datasets:[{
            label:'Population',
            data:[
                692600,
                185428,
                153606,
                118927,
                110997


            ], 
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ],
              borderWidth: 1,
              borderColor: '#777',
              hoverBorderWidth: 3,
              hoverBorderColor:'#000' 
        }]
    },
    options:{
        title: {
            display:'true',
            text:'Largest Cities in Massachusetts',
            fontSize: 25
        },
        legend:{
            display: true,
            position:'right',
            labels:{
                fontColor: 'black'
            }
        }
    }
}); 