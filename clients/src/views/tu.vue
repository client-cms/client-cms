<template>
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
    export default {
        name: "tu",
        data () {
            this.chartSettings = {
                metrics: ['下单用户']
            }
            return {
                chartData: {
                    columns: ['日期', '访问用户', '下单用户'],
                    rows: [
                        { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
                        { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
                        { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>