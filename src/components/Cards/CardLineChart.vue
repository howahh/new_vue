<template>

	<!-- Line Chart card -->
	<a-card :bordered="false" class="dashboard-bar-line header-solid">
		<template #title>
			<h6>侵权网站数量变化</h6>			
			<p>本月新增<span class="text-success">+32%</span></p>	
		</template>
		<template #extra>
			<a-badge color="primary" class="badge-dot-primary" text="侵权" />
			<a-badge color="primary" class="badge-dot-secondary" text="未侵权" />
		</template>
		<chart-line :height="200" :data="lineChartData"></chart-line>
	</a-card>
	<!-- / Line Chart card -->

</template>

<script>

	// Bar chart for "Active Users" card.
	import ChartLine from '../Charts/ChartLine' ;

	export default ({
		components: {
			ChartLine,
		},
		data() {
			return {

				// Data for line chart.
				lineChartData: {
					labels: ["1月", "2月", "3月", "4月", "5月","6月"],
					datasets: [{
						label: "侵权网站",
						tension: 0.4,
						borderWidth: 0,
						pointRadius: 0,
						borderColor: "#1890FF",
						borderWidth: 3,
						data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
						maxBarThickness: 6

					},
					{
						label: "未侵权网站",
						tension: 0.4,
						borderWidth: 0,
						pointRadius: 0,
						borderColor: "#B37FEB",
						borderWidth: 3,
						data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
						maxBarThickness: 6

					}],
				},
			}
		},
	})

</script>