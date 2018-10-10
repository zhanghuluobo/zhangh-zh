//全局变量
var _pageNo = 1;
var _pageSize = 10;

$(document).ready(function () {
    //初始化列表
    $('#dictTypeList').datagrid({
        fitColumns: true,
        rownumbers: true,
        singleSelect: true,
        toolbar: '#toolbar',
        fit: true,
        columns: [[
            {field: 'dictTypeCode', title: '字典类型编码', width: 100},
            {field: 'dictTypeName', title: '字典类型名称', width: 100},
            {field: 'category', title: '所属类别', width: 100},
            {field: 'dictTypeDetail', title: '字典类型描述', width: 100},
            {field: 'executiveStandard', title: '执行标准', width: 100},
            {field: 'dictTypeStatus', title: '状态', width: 100}
        ]]
    });
    //初始化分页
    $('#pagination').pagination({
        layout: ['list', 'sep', 'first', 'prev', 'links', 'next', 'last', 'sep'],
        pageNumber: 1,
        pageList: [10, 20, 50, 100],
    });

    //字典列表
    queryDictType();
});

//分页相关操作
$('#pagination').pagination({
    onSelectPage: function (pageNo, pageSize) {
        _pageNo = pageNo;
        _pageSize = pageSize;
        queryDictType();
    },
    onChangePageSize: function (pageNo, pageSize) {
        _pageNo = pageNo;
        _pageSize = pageSize;
        queryDictType();
    }
});

//列表查询
function queryDictType() {
    var myData = {
        pageNo: _pageNo,
        pageSize: _pageSize
    };
    $.ajax({
        url: '/zhangh/system/dictType/queryDictTypePage',
        type: 'post',
        data: JSON.stringify(myData),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (resultData) {
            var data = resultData.data;
            $('#dictTypeList').datagrid({
                data: data.records
            });
            $('#pagination').pagination({
                total: data.total,
                pageSize: data.pageSize,
            });
        }
    });
}

//弹窗
function openDictType(title) {
    $('#dictType').dialog('open').dialog('center').dialog('setTitle', title);
    $('#dictTypeForm').form('clear');
}

//新增
function insertDictType(respectiveUrl) {
    var myData = $('#dictTypeForm').serializeJson();
    $.ajax({
        url: respectiveUrl,
        type: 'post',
        data: JSON.stringify(myData),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (resultData) {
            var code = resultData.code;
            if (1 == code) {
                $.messageShowSuccess(resultData.msg);
                $('#dictType').dialog('close');

                //字典列表
                queryDictType();
            } else {
                $.messageShowFail(resultData.msg);
            }
        }
    });
}