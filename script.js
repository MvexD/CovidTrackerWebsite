
var localization = $.get("https://ipinfo.io", function(response) {
    // console.log(response.city, response.country);
    var localizationCode = response.country;
    console.log(localization);


    // $('.localization').append(""+localization);

    
    const newLocal = $.getJSON("http://api.covid19api.com/summary", function (data) {
        console.log(data);

        var worldDeaths = data.Global.TotalDeaths;
        // var polandDeaths = data.Countries[133].TotalDeaths;
        // var polandCauses = data.Countries[133].TotalConfirmed;
        var totalCauses = data.Global.TotalConfirmed;

        // console.log(polandDeaths)
        // const countryData = data.Countries.find(country=> country.CountryCode===localizationCode)
        // console.log(worldDeaths)
        const countryDatax = data.Countries.find(function(country){
            return country.CountryCode==localizationCode;
        })
        console.log(countryDatax);
        $('.compare').append(countryDatax.Country + " Compared to " + data.Countries[177].CountryCode)
        $('.totalCauses').append("Potwierdzone : " + "<b>" + totalCauses + "</b>")
        $('.totalDeaths').append("Zgony : " + "<b>" + worldDeaths + "</b>");
        $('.totalRecovered').append("Wyleczeni : " + "<b>" + data.Global.TotalRecovered + "</b>");
        // $('.totalDeaths').append("Aktualna liczba zgonów wynosi : " + "<b>" + worldDeaths + "</b>");
        $('.localization').append(" " + countryDatax.Country);
        $('.localizationDeaths').append( "Zgony: " + "<b>" + countryDatax.TotalDeaths + "</b>");
        $('.localizationCauses').append( "Potwierdzone: " + "<b>" + countryDatax.TotalConfirmed + "</b>");
        $('.localizationRecovered').append( "Wyleczeni: " + "<b>" + countryDatax.TotalRecovered + "</b>");


        $('.USname').append(" " + data.Countries[177].CountryCode);
        $('.USCauses').append("Potwierdzone : " + "<b>" + data.Countries[177].TotalConfirmed + "</b>")
        $('.USDeaths').append( "Zgony: " + "<b>" + data.Countries[177].TotalDeaths + "</b>");
        $('.USrecovered').append( "Wyleczeni: " + "<b>" + data.Countries[177].TotalRecovered + "</b>");


        // USCauses"></p>
        //                 <p class="USDeaths"></p>
        //                 <p class="USrecovered"


    })


}, "jsonp");














// $.get("https://pl.infobyip.com/", function(responsex) {
//     // console.log(response.city, response.country);
//     var localization = responsex.kraj;
//     console.log(localization);
//     $('.localization').append("huj"+localization);
//     matchLocalization();
// }, "jsonp");

// const newLocal = $.getJSON("http://api.covid19api.com/summary", function (data) {
//     console.log(data);

//     // var localization = Geolocation.getCurrentPosition();
//     var worldDeaths = data.Global.TotalDeaths;
//     var polandDeaths = data.Countries[133].TotalDeaths;
//     var polandCauses = data.Countries[133].TotalConfirmed;
//     var totalCauses = data.Global.TotalConfirmed;

//     console.log(polandDeaths)
//     console.log(worldDeaths)
//     $('.totalCauses').append("W aktualnej chwili liczba zachorowanych wynosi : " + "<b>" + totalCauses + "</b>")
//     $('.totalDeaths').append("Aktualna liczba zgonów wynosi " + "<b>" + worldDeaths + "</b>");
// }
// );