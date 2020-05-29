<template>
  <div class="report">
    <div class="report-day">
      <div class="ci">上下班统计.次</div>
      <div id="main" style="width: 600px;height: 250px;"></div>
      <div class="day-three">
        <div class="cltic"></div>正常13天
      </div>
      <div class="day-nig">
        <div class="cltic1"></div>正常9天
      </div>
      <div class="message">
        <div class="message-top">
          <div class="minute">
            <span>1</span>
            <br />
            <a>5分钟</a>
            <p>迟到</p>
          </div>
          <div class="minute1">
            <span>0</span>
            <br />
            <p>早退</p>
          </div>
          <div class="minute2">
            <span>0</span>
            <p>旷工</p>
          </div>
        </div>
        <div class="message-bottom">
          <div class="minute">
            <span>3</span>
            <p>缺卡</p>
          </div>
          <div class="minute1">
            <span>9</span>
            <p>地点异常</p>
          </div>
          <div class="minute2">
            <span>0</span>
            <p>设备异常</p>
          </div>
        </div>
      </div>
    </div>
    <div class="report-min">
      <div class="overtime">加班统计.分钟</div>
      <div class="center">
        <div class="min">
          <span>0分钟</span>
          <p>工作日加班</p>
        </div>
        <div class="min">
          <span>0分钟</span>
          <p>休息日加班</p>
        </div>
        <div class="min">
          <span>0分钟</span>
          <p>节假日加班</p>
        </div>
      </div>
    </div>

    <div class="report-holi">
      <div class="overtime">假勤统计</div>
      <div class="center">
        <div class="top">
          <div class="min1">
            <span>0</span>
            <p>打卡补卡</p>
          </div>
          <div class="min">
            <span>0</span>
            <p>外勤</p>
          </div>
          <div class="min">
            <span>0</span>
            <p>外出</p>
          </div>
        </div>
        <div class="bottom">
          <div class="min">
            <span>0</span>
            <p>出差</p>
          </div>
          <div class="min">
            <span>0</span>
            <p>年假</p>
          </div>
          <div class="min">
            <span>0</span>
            <p>事假</p>
          </div>
        </div>
      </div>
    </div>
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
            radius: ["75%", "90%"],
            startAngle: 180,
            data: [
              {
                name: "用量",
                value: current,
                itemStyle: {
                  color: "#79C81D"
                }
              },
              {
                name: "rest", // 实际显示部分是总量-用量
                value: all - current,
                itemStyle: {
                  color: "orange"
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

<style lang="stylus" scoped>
.ci {
  padding-top: 0.4rem;
  font-size: 28px;
}

.report-day {
  width: 95%;
  height: 6rem;
  margin: 0 auto;

  .day-three {
    position: absolute;
    top: 130px;
    left: 380px;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #828282;

    .cltic {
      width: 0.1rem;
      height: 0.1rem;
      background: #79C81D;
      border-radius: 50%;
    }
  }

  .day-nig {
    position: absolute;
    top: 160px;
    left: 380px;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #828282;

    .cltic1 {
      width: 0.1rem;
      height: 0.1rem;
      background: orange;
      border-radius: 50%;
    }
  }

  .message {
    width: 100%;
    height: 6rem;

    .message-top {
      display: flex;
      justify-content: space-around;

      .minute {
        margin-top: 0.2rem;

        span {
          font-size: 32px;
          margin-left: 0.25rem;
        }

        p {
          font-size: 20px;
          margin-left: 0.05rem;
        }
      }

      .minute1 {
        margin-top: 0.2rem;

        span {
          font-size: 32px;
          margin-left: 0.2rem;
        }

        p {
          font-size: 20px;
        }
      }

      .minute2 {
        margin-top: 0.2rem;

        span {
          font-size: 32px;
          margin-left: 0.2rem;
        }
      }
    }

    .message-bottom {
      display: flex;
      justify-content:space-between;
      margin-top: 0.4rem;

      .minute {
        margin-left:0.9rem;
        span {
          font-size: 30px;
          margin-left: 0.15rem;
        }

        p {
          font-size: 20px;
        }
      }

      .minute1 {
        margin-left:0.6rem;
        span {
          font-size: 30px;
          margin-left: 0.35rem;
        }

        p {
          font-size: 20px;
        }
      }

      .minute2 {
        margin-right :0.8rem;
        span {
          font-size: 30px;
          margin-left: 0.35rem;
        }

        p {
          font-size: 20px;
        }
      }
    }
  }
}

.report-min {
  width: 95%;
  height: 2.5rem;
  margin: 0 auto;

  .overtime {
    margin-left: 0.4rem;
    padding-top: 0.6rem;
    font-size: 30px;
  }

  .center {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.6rem;

    span {
      font-size: 28px;
      margin-left: 0.2rem;
    }
  }
}

.report-holi {
  width: 95%;
  height: 8rem;
  margin: 0 auto;

  .overtime {
    margin-left: 0.4rem;
    padding-top: 0.6rem;
    font-size: 30px;
  }

  .center {
    margin-top: 0.6rem;

    .top {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .min1 {
        span {
          margin-left: 0.4rem;
        }
      }

      span {
        margin-left: 0.2rem;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 1rem;

      span {
        margin-left: 0.2rem;
      }
    }
  }
}
</style>