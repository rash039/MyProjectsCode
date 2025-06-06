<table id="myTestcaseTable" class="table table-striped table-bordered">
	<thead>
		<tr>
  <th>Sr. No.#.</th>
  <th>TC No.</th>
  <th>TC Name</th>
  <th>TC Description</th>
  <th>Placement Trades</th>
  <th>RT File Trades</th>
  <th>T7 DB Trade</th>
  <th>TC Status</th>
  <th>Remarks</th>
		</tr>
	</thead>
</table>




$('#myTestcaseTable, #myTradeTable').empty();

var myData  = {{ items.table_testcase|safe }};
$('#myTestcaseTable').DataTable({
    data: myData,
    columns: [
        {
            data: null,
            render: function(data, type, row, meta) {
                return meta.row + 1;
            }
        },
        { data: 'testcase_no', title: 'TC No.' },
        { data: 'testcase_name', title: 'TC Name' },
        { data: 'testcase_description', title: 'TC Description' },
        { data: 'actual_trade_count', title: 'Placement Trades' },
        { data: 'rt_file_count', title: 'RT File Trades' },
        { data: 't7_file_count', title: 'T7 DB Trade' },
        { data: 'testcase1_status', title: 'TC Status' },
        { data: 'remarks', title: 'Remarks' },
    ],
    language: {
        loadingRecords: "Loading... Please wait."
    }
});
