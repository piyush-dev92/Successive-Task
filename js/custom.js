/*Hamburger Icon*/
(function($){
	
	$(function() {

        toggleOverlay();
        
    });

    function toggleOverlay() {
        
        $('button.hamburger').on('click', function() {

        $('body').toggleClass('overlay-active');
        $('button.hamburger').toggleClass('is-active');
		$('.mob-nav').toggleClass('mob-nav-expand');  

        return false;
        
        });
    }
	$('.right_icon').on('click', function() {
		$('.mob-nav-2').toggleClass('mob-nav-2-expand');  

    });
	$('.notification').on('click', function() {
		$('.notify-content ul li ul').slideToggle();
    });
	$('.profile').on('click', function() {
		$('.profile-content ul li ul').slideToggle();
    });

})(jQuery);

// Circle Chart
window.onload = function () {

var totalVisitors = 883000;
var visitorsData = {
	"New vs Returning Visitors": [{
		click: visitorsChartDrilldownHandler,
		cursor: "pointer",
		explodeOnClick: false,
		innerRadius: "65%",
		legendMarkerType: "square",
		name: "",
		radius: "100%",
		showInLegend: true,
		startAngle: 150,
		type: "doughnut",
		dataPoints: [
			{ y: 64, name: "Open Documents", color: "#33E4F1" },
			{ y: 23, name: "In Progress", color: "#6B75FF" },
			{ y: 23, name: "Completed", color: "#FF6464" }
		]
	}]
};

var newVSReturningVisitorsOptions = {
	animationEnabled: true,
	theme: "light2",
	legend: {
		fontFamily: "calibri",
		fontSize: 14,
		itemTextFormatter: function (e) {
			return e.dataPoint.name;  
		}
	},
	data: []
};


var chart = new CanvasJS.Chart("chartContainer", newVSReturningVisitorsOptions);
chart.options.data = visitorsData["New vs Returning Visitors"];
chart.render();

function visitorsChartDrilldownHandler(e) {
	chart = new CanvasJS.Chart("chartContainer", visitorsDrilldownedChartOptions);
	chart.options.data = visitorsData[e.dataPoint.name];
	chart.options.title = { text: e.dataPoint.name }
	chart.render();
}
}
Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: ''
    },

    xAxis: {
        categories: ['01/18','02/18','03/18','04/18','05/18','06/18','07/18','08/18','09/18','10/18','11/18',]
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: ''
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Engagement',
        data: [5, 3, 4, 7, 2,5, 3, 4, 7, 2,5]
    }, {
        name: 'Task Status',
        data: [5, 3, 4, 7, 2,5, 3, 4, 7, 2,5]
    }]
});

 new WOW().init();
 $(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222')
	});

});