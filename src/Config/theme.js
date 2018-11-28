  var theme = {
      color: [
          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
          '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
          '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
      ],
  
      title: {
          textStyle: {
              fontWeight: 'normal',
              color: '#27727B'        
          }
      },
  
      dataRange: {
          x:'right',
          y:'center',
          itemWidth: 5,
          itemHeight:25,
          color:['#C1232B','#FCCE10']
      },
  
      toolbox: {
          color : [
              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
              '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'
          ],
          effectiveColor : '#ff4500'
      },
  
      tooltip: {
          backgroundColor: 'rgba(50,50,50,0.5)',   
          axisPointer : {         
              type : 'line',        
              lineStyle : {        
                  color: '#27727B',
                  type: 'dashed'
              },
              crossStyle: {
                  color: '#27727B'
              },
              shadowStyle : {                     
                  color: 'rgba(200,200,200,0.3)'
              }
          }
      },
  
    
      dataZoom: {
          dataBackgroundColor: 'rgba(181,195,52,0.3)',            // 鏁版嵁鑳屾櫙棰滆壊
          fillerColor: 'rgba(181,195,52,0.2)',   // 濉厖棰滆壊
          handleColor: '#27727B'    // 鎵嬫焺棰滆壊
      },
  
      // 缃戞牸
      grid: {
          borderWidth:0
      },
  
      // 绫荤洰杞�
      categoryAxis: {
          axisLine: {            // 鍧愭爣杞寸嚎
              lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                  color: '#27727B'
              }
          },
          splitLine: {           // 鍒嗛殧绾�
              show: false
          }
      },
  
      // 鏁板€煎瀷鍧愭爣杞撮粯璁ゅ弬鏁�
      valueAxis: {
          axisLine: {            // 鍧愭爣杞寸嚎
              show: false
          },
          splitArea : {
              show: false
          },
          splitLine: {           // 鍒嗛殧绾�
              lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                  color: ['#ccc'],
                  type: 'dashed'
              }
          }
      },
  
      polar : {
          axisLine: {            // 鍧愭爣杞寸嚎
              lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                  color: '#ddd'
              }
          },
          splitArea : {
              show : true,
              areaStyle : {
                  color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
              }
          },
          splitLine : {
              lineStyle : {
                  color : '#ddd'
              }
          }
      },
  
      timeline : {
          lineStyle : {
              color : '#27727B'
          },
          controlStyle : {
              normal : { color : '#27727B'},
              emphasis : { color : '#27727B'}
          },
          symbol : 'emptyCircle',
          symbolSize : 3
      },
  
      // 鎶樼嚎鍥鹃粯璁ゅ弬鏁�
      line: {
          itemStyle: {
              normal: {
                  borderWidth:2,
                  borderColor:'#fff',
                  lineStyle: {
                      width: 3
                  }
              },
              emphasis: {
                  borderWidth:0
              }
          },
          symbol: 'circle',  // 鎷愮偣鍥惧舰绫诲瀷
          symbolSize: 3.5           // 鎷愮偣鍥惧舰澶у皬
      },
  
      // K绾垮浘榛樿鍙傛暟
      k: {
          itemStyle: {
              normal: {
                  color: '#C1232B',       // 闃崇嚎濉厖棰滆壊
                  color0: '#B5C334',      // 闃寸嚎濉厖棰滆壊
                  lineStyle: {
                      width: 1,
                      color: '#C1232B',   // 闃崇嚎杈规棰滆壊
                      color0: '#B5C334'   // 闃寸嚎杈规棰滆壊
                  }
              }
          }
      },
  
      // 鏁ｇ偣鍥鹃粯璁ゅ弬鏁�
      scatter: {
          itemStyle: {
              normal: {
                  borderWidth:1,
                  borderColor:'rgba(200,200,200,0.5)'
              },
              emphasis: {
                  borderWidth:0
              }
          },
          symbol: 'star4',    // 鍥惧舰绫诲瀷
          symbolSize: 4        // 鍥惧舰澶у皬锛屽崐瀹斤紙鍗婂緞锛夊弬鏁帮紝褰撳浘褰负鏂瑰悜鎴栬彵褰㈠垯鎬诲搴︿负symbolSize * 2
      },
  
      // 闆疯揪鍥鹃粯璁ゅ弬鏁�
      radar : {
          symbol: 'emptyCircle',    // 鍥惧舰绫诲瀷
          symbolSize:3
          //symbol: null,         // 鎷愮偣鍥惧舰绫诲瀷
          //symbolRotate : null,  // 鍥惧舰鏃嬭浆鎺у埗
      },
  
      map: {
          itemStyle: {
              normal: {
                  areaStyle: {
                      color: '#ddd'
                  },
                  label: {
                      textStyle: {
                          color: '#C1232B'
                      }
                  }
              },
              emphasis: {                 // 涔熸槸閫変腑鏍峰紡
                  areaStyle: {
                      color: '#fe994e'
                  },
                  label: {
                      textStyle: {
                          color: 'rgb(100,0,0)'
                      }
                  }
              }
          }
      },
  
      force : {
          itemStyle: {
              normal: {
                  linkStyle : {
                      color : '#27727B'
                  }
              }
          }
      },
  
      chord : {
          itemStyle : {
              normal : {
                  borderWidth: 1,
                  borderColor: 'rgba(128, 128, 128, 0.5)',
                  chordStyle : {
                      lineStyle : {
                          color : 'rgba(128, 128, 128, 0.5)'
                      }
                  }
              },
              emphasis : {
                  borderWidth: 1,
                  borderColor: 'rgba(128, 128, 128, 0.5)',
                  chordStyle : {
                      lineStyle : {
                          color : 'rgba(128, 128, 128, 0.5)'
                      }
                  }
              }
          }
      },
  
      gauge : {
          center:['50%','80%'],
          radius:'100%',
          startAngle: 180,
          endAngle : 0,
          axisLine: {            // 鍧愭爣杞寸嚎
              show: true,        // 榛樿鏄剧ず锛屽睘鎬how鎺у埗鏄剧ず涓庡惁
              lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                  color: [[0.2, '#B5C334'],[0.8, '#27727B'],[1, '#C1232B']],
                  width: '40%'
              }
          },
          axisTick: {            // 鍧愭爣杞村皬鏍囪
              splitNumber: 2,   // 姣忎唤split缁嗗垎澶氬皯娈�
              length: 5,        // 灞炴€ength鎺у埗绾块暱
              lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                  color: '#fff'
              }
          },
          axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
              textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                  color: '#fff',
                  fontWeight:'bolder'
              }
          },
          splitLine: {           // 鍒嗛殧绾�
              length: '5%',         // 灞炴€ength鎺у埗绾块暱
              lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                  color: '#fff'
              }
          },
          pointer : {
              width : '40%',
              length: '80%',
              color: '#fff'
          },
          title : {
            offsetCenter: [0, -20],       // x, y锛屽崟浣峱x
            textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
              color: 'auto',
              fontSize: 20
            }
          },
          detail : {
              offsetCenter: [0, 0],       // x, y锛屽崟浣峱x
              textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                  color: 'auto',
                  fontSize: 40
              }
          }
      },
  
      textStyle: {
          fontFamily: '寰蒋闆呴粦, Arial, Verdana, sans-serif'
      }
  };
  
export default theme;