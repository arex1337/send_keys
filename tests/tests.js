test('send_keys', function () {
    var q, a;

    $('#input1').send_keys('abcdefgh');
    q = $('#input1').val();
    a = 'abcdefgh'
    same(q, a, 'Make sure that send_keys sets the value of the target element equal to the provided string');

    $('#input2').send_keys('a');
    q = $('#input2').val();
    a = 'a'
    same(q, a, 'Make sure that send_keys works on input[type=text]');

    $('#textarea1').send_keys('a');
    q = $('#textarea1').val();
    a = 'a'
    same(q, a, 'Make sure that send_keys works on textarea');

    $('#textarea2').send_keys('a');
    q = $('#textarea2_results').html();
    a = 'keydownkeypresskeyup'
    same(q, a, 'Make sure that send_keys triggers events keydown, keypress and keyup in the right order when sending keys to a text input');

    $('#textarea3').send_keys('abc');
    q = $('#textarea3_results').html();
    a = 'keydownkeypresskeyupkeydownkeypresskeyupkeydownkeypresskeyup'
    same(q, a, 'Make sure that send_keys triggers events multiple times if the provided string has more than one character');
    
});