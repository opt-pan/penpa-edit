var sw_timer = new easytimer.Timer();

$('#stop_watch #sw_stop').click(function() {
    sw_timer.stop();
});

$('#stop_watch #sw_reset').click(function() {
    let timer_running = sw_timer.isRunning();
    sw_timer.reset();
    if (timer_running) {
        sw_timer.start();
    }
});

$('#stop_watch #sw_hide').click(function() {
    let timer_value = document.getElementById("timer");
    let hide_button = document.getElementById("sw_hide");
    if (hide_button.textContent === "Hide" || hide_button.textContent === "隠す") {
        timer_value.style.display = "None";
        if (document.getElementById("english").innerHTML === "EN") {
            hide_button.textContent = "表示";
        } else {
            hide_button.textContent = "Show";
        }
    } else {
        timer_value.style.display = "inline-block";
        if (document.getElementById("english").innerHTML === "EN") {
            hide_button.textContent = "隠す";
        } else {
            hide_button.textContent = "Hide";
        }
    }
});

function timer_update() {
    $('#stop_watch .values').html(sw_timer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds', 'secondTenths']));
}

sw_timer.addEventListener('secondsUpdated', timer_update);
sw_timer.addEventListener('started', timer_update);

sw_timer.addEventListener('reset', function(e) {
    timer_update();
    sw_timer.stop();
});

sw_timer.addEventListener('paused', timer_update);