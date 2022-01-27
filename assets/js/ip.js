
fetch('https://api.ipdata.co?api-key=f2759ae72498ad5e9d0200c8f46035d7cfa4f39ffdb6439e2669f12e').then(function(response) {
  return response.json();
}).then(function(data) {
  document.getElementById("ipaddress").value = (data.ip);
  document.getElementById("ipcity").value = (data.city);
  document.getElementById("ipregion").value = (data.region);
  document.getElementById("ipcounty").value = (data.country_name);
  document.getElementById("ipcontinent").value = (data.continent_name);
  document.getElementById("iplatitude").value = (data.latitude);
  document.getElementById("iplongitude").value = (data.longitude);
}).catch(function() {
  console.log("Booo");
});
