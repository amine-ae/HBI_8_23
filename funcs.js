function funY_N(){
    
    var input_data = document.getElementById('input_Y_N').value
    
    if( input_data != 'بلى') {
        document.getElementById("answerdiv").style.visibility = 'Visible'
        document.getElementById("_btn1").style.visibility = 'hidden'
        time = 20000
    }
    else{ time = 0}
    
    setTimeout(myFun,time);
  
}

function myFun(){
    window.location.href = "./arabic.html"
}

function funBirthday(){
    window.location.href = "./hb.html"
}

function playaudio(){
    document.getElementById("text-greeting").style.visibility = 'hidden'
    document.getElementById("img-greeting").style.visibility = 'hidden'
    document.getElementById("celib").style.visibility = 'hidden'
    setTimeout(myfun2,10000)
    setTimeout(lastpage,100000)
}

function myfun2(){
    document.getElementById("celib").style.visibility = 'Visible'
    document.getElementById("img-greeting").style.visibility = 'Visible'
    document.getElementById("text-greeting").style.visibility = 'Visible'
}

function lastpage() {
    window.location.href = "./lpage.html"
}

function counter(){
    setTimeout(myfun3,30000)
}

function myfun3() {
    window.location.href = "./home.html"
}
