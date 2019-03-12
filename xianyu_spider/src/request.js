/**
 * Created by ghy on 2019/3/12.
 */
var str = 'miid=1451679919776260466; hng=CN%7Czh-CN%7CCNY%7C156; cna=ZYGlEWEw+R8CAXt9GurgTumm; tracknick=tb1392787; tg=0; thw=cn; x=e%3D1%26p%3D*%26s%3D0%26c%3D0%26f%3D0%26g%3D0%26t%3D0%26__ll%3D-1%26_ato%3D0; t=fe92b9a8e9d473761fda51482965f0a2; UM_distinctid=1694d5caf1e5b2-0af9337b4509f4-414c042a-1fa400-1694d5caf1f61f; v=0; cookie2=1d2fd27901b9f1d84479617cd021a68d; tb_token=ee373e7be7357; lgc=tb1392787; cc=W5iHLLyFfA%3D%3D; dnk=tb1392787; enc=9ON6m6JlAgW1%2FvWAnqdrfSsoj6u36oSpM%2BgxFSJvIcC%2FES7NHiEsULq7DhEhA7gS9b9vxHLILoJ%2BxB0bjqbiMA%3D%3D; uc1=cookie16=VFC%2FuZ9az08KUQ56dCrZDlbNdA%3D%3D&cookie21=VFC%2FuZ9ainBZ&cookie15=URm48syIIVrSKA%3D%3D&existShop=false&pas=0&cookie14=UoTZ5iV7mPH9Ng%3D%3D&tag=8&lng=zh_CN; skt=ca6b861009f3fc29; csg=9489e3c5; uc3=vt3=F8dByEvyaQtcFugR%2BMQ%3D&id2=Vv7Izfz7TLm5&nk2=F5REPQjLKIcI&lg2=U%2BGCWk%2F75gdr5Q%3D%3D; existShop=MTU1MjAzMTg0Nw%3D%3D; mt=ci=-1_1&np=; whl=0%260%261552031867459%261552031857436; _m_h5_tk=8dc2ff14bb0b3c9319eb1ee7052323a8_1552368745028; _m_h5_tk_enc=449136df4025d90c1ceb886fd64b2665; isg=Ai4udegXog3861bQN2PHs0SYf4T60-tZiY6r6lj3mjHsO86VwL9COdSa9h0o'
var st2='cna=nEYOFXxWhTsCASRuOhLFY5Mk; t=f29c976904f01fe7ca630bab07d31a81; _m_h5_tk=0df2f364c9a27f3c898b7185a262ca8e_1552399607153; _m_h5_tk_enc=307a6f69f6ddac0d93468d7430c3166b; isg=ArGxbSE1FVT3Srl5vHIQOl9ZwD1BYjxgQm_Ew5PGrXiXutEM2-414F_cqngg'


var array = st2.split(';')
var map = {}
for (var item of array) {
    item = item.replace(/\s+/, '');
    var tmp = item.split('=');
    map[tmp[0]] = tmp[1];
}
console.log(JSON.stringify(map))