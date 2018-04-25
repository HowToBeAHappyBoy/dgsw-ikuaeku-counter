//집 가는 날
const count = new Date("May 4, 2018 15:30:00").getTime()


const cntFnc = setInterval(() => {

    let now  = new Date().getTime();
    //아침은 7시 20분에 먹는다.
    let breakfast=new Date(new Date().toLocaleDateString()+" 7:20:00").getTime();
    //점심은 12시 30분에 먹는다.
    let lunch=new Date(new Date().toLocaleDateString()+" 12:30:00").getTime();
    //저녁은 18시 40분에 먹는다.
    let dinner=new Date(new Date().toLocaleDateString()+" 18:40:00").getTime();
    //남은 날짜 계산
    let term = count - now;
    let days  = Math.round(term / (1000 * 60 * 60 * 24));
    let hours = Math.round( term % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
    let mins  = Math.round( term % (1000 * 60 * 60) / (1000 * 60) );
    let secs  = Math.round( term % (1000 * 60) / 1000 );
    //오늘을 제외하고 하루에 3끼
    //집에 가는 날은 저녁을 먹지 않는다.
    let meal=(days*3)-1;
    //아침을 먹지 않았으면 +1
    if(now-breakfast<0){
        meal+=1;
    }
    //점심을 먹지 않았으면 +1
    if(now-lunch<0){
        meal+=1;
    }
    //저녁을 먹지 않았으면 +1
    if(now-dinner<0){
        meal+=1;
    }
    //택견은 하루에 한 번 한다
    //주말은 안 함 
    let ikuaeku=days-2;
    //토요일이면 택견은 5번 남았다
    if(days==6){
        ikuaeku=5;
    }
    //주말이 지나가면 남은 날만큼 택견을 한다
    if(days-2<=5){
        ikuaeku=days;
    }
    document.getElementById("gohome").innerHTML=days+" 일 "+hours+" 시간 "+mins+" 분 "+secs+" 초 남았습니다";
    document.getElementById("ikuaeku").innerHTML=ikuaeku+" 택견 남았습니다";
    document.getElementById("meal").innerHTML=meal+" 급식 남았습니다";
}, 1000)