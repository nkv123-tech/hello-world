localStorage.setItem("dem",3)
function game(){

    let random_number=Math.floor(Math.random()*10)+1;
    console.log(random_number);
    let button=document.getElementById("button").addEventListener("click",function(){
        let dm=localStorage.dem;
        if (dm != 0) {
            let input = document.getElementById("input").value;
            dm -= 1;
            localStorage.setItem("dem", dm)
            if (input > random_number) {
                alert("Nho hon")
            } else
                if (input < random_number) {
                    alert("Lon hon")
                }
            else if(input==random_number){
                localStorage.setItem("dem", 0)
                alert("Chinh Xac")
            }
        }else{
            alert("Ban da het luot choi")
        }
    })
}
game()
