var v = [1, 2, 2, 1, 3];
var v2 = [2, 2, 3];
intersection(v, v2);
function intersection(nums1, nums2) {
    var response = [];
    for (var i = 0; i < nums1.length; i++) {
        var _loop_1 = function (j) {
            if (nums1[i] === nums2[j]) {
                if (response.filter(function (item) { return item === nums2[j]; }).length === 0) {
                    response.push(nums2[j]);
                }
                nums2.splice(j, 1);
                return "break";
            }
        };
        for (var j = 0; j < nums2.length; j++) {
            var state_1 = _loop_1(j);
            if (state_1 === "break")
                break;
        }
    }
    console.log(response);
    return response;
}
