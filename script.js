const slider = document.querySelector("#phoneSlider");
const formatted = document.querySelector("#phoneFormatted");
const hiddenValue = document.querySelector("#phoneValue");
const form = document.querySelector(".profile-form");
const genderInputs = document.querySelectorAll("input[name='gender']");
const genderError = document.querySelector("#genderError");
const captchaButton = document.querySelector("#captchaButton");
const citySelect = document.querySelector("#citySelect");

const addressBases = [
  "北京市东城区东华门街道", "北京市西城区金融街街道", "北京市朝阳区望京街道", "北京市海淀区中关村街道", "北京市昌平区回龙观街道", "北京市昌平县XX街道",
  "天津市和平区小白楼街道", "天津市河西区马场街道", "天津市南开区鼓楼街道", "天津市滨海新区塘沽街道",
  "河北省石家庄市长安区育才街道", "河北省唐山市路北区乔屯街道", "河北省保定市竞秀区先锋街道", "河北省廊坊市广阳区新开路街道",
  "山西省太原市小店区平阳路街道", "山西省大同市平城区迎宾街道", "山西省晋中市榆次区新华街道", "山西省运城市盐湖区东城街道",
  "内蒙古自治区呼和浩特市新城区海拉尔东路街道", "内蒙古自治区包头市昆都仑区少先路街道", "内蒙古自治区赤峰市红山区站前街道", "内蒙古自治区鄂尔多斯市东胜区交通街道",
  "辽宁省沈阳市和平区太原街街道", "辽宁省大连市中山区青泥洼桥街道", "辽宁省鞍山市铁东区园林街道", "辽宁省锦州市古塔区敬业街道",
  "吉林省长春市朝阳区桂林街道", "吉林省吉林市船营区南京街道", "吉林省延边朝鲜族自治州延吉市公园街道", "吉林省四平市铁西区英雄街道",
  "黑龙江省哈尔滨市道里区尚志街道", "黑龙江省齐齐哈尔市龙沙区湖滨街道", "黑龙江省牡丹江市东安区七星街道", "黑龙江省大庆市萨尔图区东风街道",
  "上海市黄浦区南京东路街道", "上海市徐汇区徐家汇街道", "上海市浦东新区陆家嘴街道", "上海市静安区静安寺街道",
  "江苏省南京市鼓楼区湖南路街道", "江苏省苏州市姑苏区平江街道", "江苏省无锡市梁溪区崇安寺街道", "江苏省扬州市广陵区东关街道",
  "浙江省杭州市西湖区古荡街道", "浙江省宁波市海曙区鼓楼街道", "浙江省温州市鹿城区五马街道", "浙江省绍兴市越城区府山街道",
  "安徽省合肥市蜀山区三里庵街道", "安徽省芜湖市镜湖区赭山街道", "安徽省蚌埠市蚌山区青年街道", "安徽省黄山市屯溪区昱中街道",
  "福建省福州市鼓楼区东街街道", "福建省厦门市思明区中华街道", "福建省泉州市鲤城区开元街道", "福建省漳州市芗城区东铺头街道",
  "江西省南昌市东湖区百花洲街道", "江西省九江市浔阳区甘棠街道", "江西省赣州市章贡区解放街道", "江西省景德镇市珠山区昌江街道",
  "山东省济南市历下区趵突泉街道", "山东省青岛市市南区香港中路街道", "山东省烟台市芝罘区毓璜顶街道", "山东省潍坊市奎文区东关街道",
  "河南省郑州市金水区花园路街道", "河南省洛阳市西工区王城路街道", "河南省开封市鼓楼区州桥街道", "河南省南阳市卧龙区七一街道",
  "湖北省武汉市武昌区水果湖街道", "湖北省宜昌市西陵区学院街道", "湖北省襄阳市樊城区汉江街道", "湖北省黄石市黄石港区胜阳港街道",
  "湖南省长沙市岳麓区望月湖街道", "湖南省株洲市芦淞区建设街道", "湖南省湘潭市雨湖区雨湖路街道", "湖南省衡阳市石鼓区人民街道",
  "广东省广州市天河区石牌街道", "广东省深圳市南山区粤海街道", "广东省佛山市禅城区祖庙街道", "广东省东莞市南城街道",
  "广西壮族自治区南宁市青秀区中山街道", "广西壮族自治区桂林市秀峰区秀峰街道", "广西壮族自治区柳州市城中区中南街道", "广西壮族自治区北海市海城区中街街道",
  "海南省海口市龙华区金贸街道", "海南省三亚市吉阳区吉阳街道", "海南省儋州市那大镇", "海南省琼海市嘉积镇",
  "重庆市渝中区解放碑街道", "重庆市江北区观音桥街道", "重庆市沙坪坝区渝碚路街道", "重庆市九龙坡区杨家坪街道",
  "四川省成都市锦江区春熙路街道", "四川省绵阳市涪城区城厢街道", "四川省德阳市旌阳区旌阳街道", "四川省乐山市市中区张公桥街道",
  "贵州省贵阳市云岩区中华中路街道", "贵州省遵义市红花岗区老城街道", "贵州省六盘水市钟山区凤凰街道", "贵州省安顺市西秀区东关街道",
  "云南省昆明市五华区护国街道", "云南省大理白族自治州大理市下关街道", "云南省丽江市古城区大研街道", "云南省曲靖市麒麟区南宁街道",
  "西藏自治区拉萨市城关区八廓街道", "西藏自治区日喀则市桑珠孜区城南街道", "西藏自治区林芝市巴宜区八一镇", "西藏自治区昌都市卡若区城关镇",
  "陕西省西安市雁塔区小寨路街道", "陕西省宝鸡市渭滨区经二路街道", "陕西省咸阳市秦都区人民路街道", "陕西省延安市宝塔区南市街道",
  "甘肃省兰州市城关区张掖路街道", "甘肃省天水市秦州区七里墩街道", "甘肃省酒泉市肃州区东南街街道", "甘肃省嘉峪关市雄关街道",
  "青海省西宁市城中区人民街街道", "青海省海东市乐都区碾伯街道", "青海省海西蒙古族藏族自治州格尔木市昆仑路街道", "青海省海南藏族自治州共和县恰卜恰镇",
  "宁夏回族自治区银川市兴庆区玉皇阁北街街道", "宁夏回族自治区石嘴山市大武口区朝阳街道", "宁夏回族自治区吴忠市利通区古城街道", "宁夏回族自治区固原市原州区南关街道",
  "新疆维吾尔自治区乌鲁木齐市天山区解放南路街道", "新疆维吾尔自治区克拉玛依市克拉玛依区昆仑路街道", "新疆维吾尔自治区喀什地区喀什市吾斯塘博依街道", "新疆维吾尔自治区伊犁哈萨克自治州伊宁市艾兰木巴格街道",
  "台湾省台北市信义区信义路街道", "台湾省高雄市苓雅区四维路街道", "台湾省台中市西屯区市政路街道", "台湾省台南市中西区民权路街道",
  "香港特别行政区香港岛中西区中环街道", "香港特别行政区九龙油尖旺区旺角街道", "香港特别行政区新界沙田区沙田街道", "香港特别行政区新界屯门区屯门街道",
  "澳门特别行政区澳门半岛花地玛堂区黑沙环街道", "澳门特别行政区澳门半岛大堂区新马路街道", "澳门特别行政区氹仔嘉模堂区氹仔街道", "澳门特别行政区路环圣方济各堂区路环街道",
];

const noisyAddressSuffixes = ["", "第一社区", "第二社区", "第三网格", "人民路片区", "建设路片区", "中心社区", "XX街道", "XX镇", "XX乡"];

const populateCitySelect = () => {
  if (!citySelect) return;

  const options = addressBases.flatMap((base) => noisyAddressSuffixes.map((suffix) => `${base}${suffix}`));
  citySelect.replaceChildren(
    ...options.map((address) => {
      const option = document.createElement("option");
      option.textContent = address;
      option.value = address;
      return option;
    }),
  );
};

populateCitySelect();

const formatPhone = (value) => {
  const phone = String(Math.round(Number(value))).padStart(11, "0");
  return `${phone.slice(0, 3)} ${phone.slice(3, 7)} ${phone.slice(7)}`;
};

const updatePhone = () => {
  const min = Number(slider.min);
  const max = Number(slider.max);
  const current = Number(slider.value);
  const progress = ((current - min) / (max - min)) * 100;

  formatted.textContent = formatPhone(current);
  formatted.classList.remove("is-empty");
  hiddenValue.value = String(Math.round(current));
  slider.style.setProperty("--fill", `${progress}%`);
};

const initPhoneSlider = () => {
  const min = Number(slider.min);
  const max = Number(slider.max);
  const current = Number(slider.value);
  const progress = ((current - min) / (max - min)) * 100;

  hiddenValue.value = "";
  slider.style.setProperty("--fill", `${progress}%`);
};

slider.addEventListener("input", updatePhone);
initPhoneSlider();

genderInputs.forEach((input) => {
  input.addEventListener("change", () => {
    genderError.textContent = "性别已被占用";
  });
});

captchaButton.addEventListener("click", () => {
  let seconds = 60;
  captchaButton.disabled = true;
  captchaButton.textContent = `${seconds} 秒后重试`;

  const timer = window.setInterval(() => {
    seconds -= 1;
    captchaButton.textContent = `${seconds} 秒后重试`;

    if (seconds <= 0) {
      window.clearInterval(timer);
      captchaButton.disabled = false;
      captchaButton.textContent = "获取验证码";
    }
  }, 1000);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedGender = [...genderInputs].some((input) => input.checked);
  if (!selectedGender) {
    genderError.textContent = "请选择性别";
    return;
  }

  const submitButton = form.querySelector(".primary");
  submitButton.textContent = "已提交";

  window.setTimeout(() => {
    submitButton.textContent = "提交";
  }, 1600);
});
