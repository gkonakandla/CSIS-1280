var format = "12-hr"
      function updatedate(){
        updateTime();
        const today = new Date();
          const options = {
            timeZone: 'America/Vancouver',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };
      const formattedDate = today.toLocaleDateString('en-US', options);
      const array = formattedDate.split(",");
      document.getElementById("day").innerHTML = array[0];
      document.getElementById("date").innerHTML = array[1]+", "+array[2];
      }
      function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm=""
        if(format=="12-hr"){
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        }
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
        document.getElementById("session").innerHTML = ampm;
        }
      function toggle(){
        var temp_format = document.getElementById("toggle-btn").innerHTML;
        if(temp_format=="24-hr"){
          format = "24-hr";
          document.getElementById("toggle-btn").innerHTML = "12-hr";
        }else{
          format = "12-hr";
          document.getElementById("toggle-btn").innerHTML = "24-hr";
        }
      }
      setInterval(updateTime, 1000);