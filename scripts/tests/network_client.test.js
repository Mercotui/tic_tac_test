// UNIT TEST FRAMEWORK
var test_results_table = document.getElementById("test_results_table");
var test_status_image = document.getElementById("test_status_image");
var test_status = document.getElementById("test_status");

function run_test (test_name, test) {
  var row = test_results_table.insertRow(-1);
  row.insertCell(0).innerHTML = test_name;
  var test_result_cell = row.insertCell(1);

  try {
    test();
    test_result_cell.innerHTML = "PASS";
    test_result_cell.style.color = "green";
  } catch (e) {
    console.log(e);
    test_result_cell.innerHTML = "FAIL";
    test_result_cell.style.color = "red";
    test_status_image.src = "resources/sad.png";
    test_status.innerHTML = "failed";
    test_status.style.color = "red";
  }
}

// UNIT TESTS
test_status.innerHTML = "running";

run_test('NetworkClient: Create', () => {
  test_client = new NetworkClient();
});

if (test_status.innerHTML == "running") {
  test_status.innerHTML = "success!";
  test_status.style.color = "green";
  test_status_image.src = "resources/happy.png";
}
