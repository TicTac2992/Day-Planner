$(document).ready(function() {

    //Create our variables
    let day = $('<p>');
    let time = $('<p>');
    let box1 = $('#div1');
    let box2 = $('#div2');
    let box3 = $('#div3');
    let box4 = $('#div4');
    let box5 = $('#div5');
    let box6 = $('#div6');
    let box7 = $('#div7');
    let box8 = $('#div8');
    let box9 = $('#div9');

    //Sets each hours based on info pulled from local storage
    box1.val(localStorage.getItem('Entry1'));
    box2.val(localStorage.getItem('Entry2'));
    box3.val(localStorage.getItem('Entry3'));
    box4.val(localStorage.getItem('Entry4'));
    box5.val(localStorage.getItem('Entry5'));
    box6.val(localStorage.getItem('Entry6'));
    box7.val(localStorage.getItem('Entry7'));
    box8.val(localStorage.getItem('Entry8'));
    box9.val(localStorage.getItem('Entry9'));
  
    //Create variables for save button objects
    let button1 = $('#btn1');
    let button2 = $('#btn2');
    let button3 = $('#btn3');
    let button4 = $('#btn4');
    let button5 = $('#btn5');
    let button6 = $('#btn6');
    let button7 = $('#btn7');
    let button8 = $('#btn8');
    let button9 = $('#btn9');
    let clearBtn = $('#clearBtn');
  
    //Show the current hour
    var timeNow = parseInt(moment().format('HH'));

    //Clears local storage 
    function clear() {
        localStorage.clear();
  
        box1.val('');
        box2.val('');
        box3.val('');
        box4.val('');
        box5.val('');
        box6.val('');
        box7.val('');
        box8.val('');
        box9.val('');
    }
  
    //Append current date and time
    function tick() {
        day.text(moment().format('LL'));
        time.text(moment().format('hh:mm:ssA'));
        $('.jumbotron').append(day);
        $('.jumbotron').append(time);
    }

    //Compares each hour with the current hour and changes color of textbox accordingly
    //Green means future
    //Red means now
    //Grey means past
    function checkTime() {
            
        if (parseInt(box1.attr('data-hour')) > timeNow) {
            box1.removeClass('past present future');
            box1.addClass('future')
        } else if (parseInt(box1.attr('data-hour')) === timeNow) {
            box1.removeClass('past present future');
            box1.addClass('present');
        } else {
            box1.removeClass('past present future');
            box1.addClass('past');
        }
  
        if (parseInt(box2.attr('data-hour')) > timeNow) {
            box2.removeClass('past present future');
            box2.addClass('future');
        } else if (parseInt(box2.attr('data-hour')) === timeNow) {
            box2.removeClass('past present future');
            box2.addClass('present');
        } else {
            box2.removeClass('past present future');
            box2.addClass('past');
        }
  
        if (parseInt(box3.attr('data-hour')) > timeNow) {
            box3.removeClass('past present future');
            box3.addClass('future');
        } else if (parseInt(box3.attr('data-hour')) === timeNow) {
            box3.removeClass('past present future');
            box3.addClass('present');
        } else {
            box3.removeClass('past present future');
            box3.addClass('past');
        }
  
        if (parseInt(box4.attr('data-hour')) > timeNow) {
            box4.removeClass('past present future');
            box4.addClass('future');
        } else if (parseInt(box4.attr('data-hour')) === timeNow) {
            box4.removeClass('past present future');
            box4.addClass('present');
        } else {
            box4.removeClass('past present future');
            box4.addClass('past');
        }
  
        if (parseInt(box5.attr('data-hour')) > timeNow) {
            box5.removeClass('past present future');
            box5.addClass('future');
        } else if (parseInt(box5.attr('data-hour')) === timeNow) {
            box5.removeClass('past present future');
            box5.addClass('present');
        } else {
            box5.removeClass('past present future');
            box5.addClass('past');
        }
  
        if (parseInt(box6.attr('data-hour')) > timeNow) {
            box6.removeClass('past present future');
            box6.addClass('future');
        } else if (parseInt(box6.attr('data-hour')) === timeNow) {
            box6.removeClass('past present future');
            box6.addClass('present');
        } else {
            box6.removeClass('past present future');
            box6.addClass('past');
        }
  
        if (parseInt(box7.attr('data-hour')) > timeNow) {
            box7.removeClass('past present future');
            box7.addClass('future');
        } else if (parseInt(box7.attr('data-hour')) === timeNow) {
            box7.removeClass('past present future');
            box7.addClass('present');
        } else {
            box7.removeClass('past present future');
            box7.addClass('past');
        }

        if (parseInt(box8.attr('data-hour')) > timeNow) {
            box8.removeClass('past present future');
            box8.addClass('future');
        } else if (parseInt(box8.attr('data-hour')) === timeNow) {
            box8.removeClass('past present future');
            box8.addClass('present');
        } else {
            box8.removeClass('past present future');
            box8.addClass('past');
        }

        if (parseInt(box9.attr('data-hour')) > timeNow) {
            box9.removeClass('past present future');
            box9.addClass('future');
        } else if (parseInt(box9.attr('data-hour')) === timeNow) {
            box9.removeClass('past present future');
            box9.addClass('present');
        } else {
            box9.removeClass('past present future');
            box9.addClass('past');
        }
    }

    //Shows current date and time at top
    tick();
    //Update current time every second and display it
    setInterval(tick, 1000);
    //Update colors correctly every 10 minutes
    setInterval(checkTime, 600000);
    //When Clear button is pushed, it cleans out calendar
    clearBtn.on('click', clear);
  
    button1.on('click', function() {
        event.preventDefault();
        if (box1.val() !== '') {
            localStorage.setItem('Entry1', box1.val());
        }
    });
  
    button2.on('click', function() {
        event.preventDefault();
        if (box2.val() !== '') {
            localStorage.setItem('Entry2', box2.val());
        }
    });
  
    button3.on('click', function() {
        event.preventDefault();
        if (box3.val() !== '') {
            localStorage.setItem('Entry3', box3.val());
        }
    });
  
    button4.on('click', function() {
        event.preventDefault();
        if (box4.val() !== '') {
            localStorage.setItem('Entry4', box4.val());
        }
    });
    
    button5.on('click', function() {
        event.preventDefault();
        if (box5.val() !== '') {
            localStorage.setItem('Entry5', box5.val());
        }
    });
    
    button6.on('click', function() {
        event.preventDefault();
        if (box6.val() !== '') {
            localStorage.setItem('Entry6', box6.val());
        }
    });
  
    button7.on('click', function() {
        event.preventDefault();
        if (box7.val() !== '') {
            localStorage.setItem('Entry7', box7.val());
        }
    });
  
    button8.on('click', function() {
        event.preventDefault();
        if (box8.val() !== '') {
            localStorage.setItem('Entry8', box8.val());
        }
    });
  
    button9.on('click', function() {
        event.preventDefault();
        if (box9.val() !== '') {
            localStorage.setItem('Entry9', box9.val());
        }
    });
  
    checkTime();
  });