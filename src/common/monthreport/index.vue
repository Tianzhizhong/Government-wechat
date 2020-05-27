<template>
  <div class="report">
    <div id="main" style="width: 600px;height: 400px;"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "report",
  mounted() {
    this.drawline();
  },
  methods: {
    drawline() {
      let chart1 = echarts.init(document.getElementById("main"));
      let current = 13; // 当前用量
      let all = 22; // 总量
      let option = {
        series: [
          {
            type: "pie",
            label: {
              show: false
            },
            center: ["65%", "45%"],
            radius: ["50%", "70%"],
            startAngle: 180,
            data: [
              {
                name: "用量",
                value: current,
                itemStyle: {
                  color: "#ff9900"
                }
              },
              {
                name: "rest", // 实际显示部分是总量-用量
                value: all - current,
                itemStyle: {
                  color: "skyblue"
                }
              },
              {
                name: "bottom",
                value: all,
                itemStyle: {
                  color: "transparent"
                }
              }
            ]
          }
        ]
      };
      chart1.setOption(option);
    }
  }
};
</script>

<style lang="stylus"></style>