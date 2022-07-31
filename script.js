/** Function to check if the ipv4 is valid */
function is_valid_ipv4(ipv4) {
    let ipv4_array = ipv4.split('.');
    if (ipv4_array.length != 4) {
        return false;
    }
    for (let i = 0; i < ipv4_array.length; i++) {
        if (isNaN(parseInt(ipv4_array[i])) || ipv4_array[i] < 0 || ipv4_array[i] > 255) {
            return false;
        }
    }
    return true;
}
/** Function to check if the decimal ipv4 is valid */
function is_valid_dec_ipv4(ipv4_dec) {
    if (ipv4_dec < 0 || ipv4_dec > 4294967295) {
        return false;
    }
    return true;
}
/** Function to check if the hexadecimal ipv4 is valid */
function is_valid_hex_ipv4(ipv4_hex) {
    if (ipv4_hex.length != 8) {
        return false;
    }
    for (let i = 0; i < ipv4_hex.length; i++) {
        if (ipv4_hex.charAt(i) < 0 || ipv4_hex.charAt(i) > 15) {
            return false;
        }
    }
    return true;
}
/** Function to check if the binary ipv4 is valid */
function is_valid_bin_ipv4(ipv4_bin) {
    if (ipv4_bin.length != 32) {
        return false;
    }
    for (let i = 0; i < ipv4_bin.length; i++) {
        if (ipv4_bin.charAt(i) != '0' && ipv4_bin.charAt(i) != '1') {
            return false;
        }
    }
    return true;
}
// ----------------------------------------------------------------------------------------------------
/** Function to check if the ipv6 is valid */
function is_valid_ipv6(ipv6) {
    let ipv6_array = ipv6.split(':');
    if (ipv6_array.length != 8) {
        return false;
    }
    for (let i = 0; i < ipv6_array.length; i++) {
        if (ipv6_array[i].length > 4) {
            return false;
        }
        for (let j = 0; j < ipv6_array[i].length; j++) {
            if (ipv6_array[i].charAt(j) < 0 || ipv6_array[i].charAt(j) > 15) {
                return false;
            }
        }
    }
    return true;
}
/** Function to check if the decimal ipv6 is valid */
function is_valid_dec_ipv6(ipv6_dec) {
    if (ipv6_dec < 0 || ipv6_dec > 281474976710656) {
        return false;
    }
    return true;
}
/** Function to check if the hexadecimal ipv6 is valid */
function is_valid_hex_ipv6(ipv6_hex) {
    if (ipv6_hex.length != 32) {
        return false;
    }
    for (let i = 0; i < ipv6_hex.length; i++) {
        if (ipv6_hex.charAt(i) < 0 || ipv6_hex.charAt(i) > 15) {
            return false;
        }
    }
    return true;
}
/** Function to check if the binary ipv6 is valid */
function is_valid_bin_ipv6(ipv6_bin) {
    if (ipv6_bin.length != 128) {
        return false;
    }
    for (let i = 0; i < ipv6_bin.length; i++) {
        if (ipv6_bin.charAt(i) != '0' && ipv6_bin.charAt(i) != '1') {
            return false;
        }
    }
    return true;
}
// ----------------------------------------------------------------------------------------------------
/** Function to convert a ipv4 to decimal */
function ipv42dec(ipv4) {
    let ipv4_array = ipv4.split('.');
    let ipv4_dec = 0;
    for (let i = 0; i < ipv4_array.length; i++) {
        ipv4_dec += ipv4_array[i] * Math.pow(256, (3 - i));
    }
    return ipv4_dec;
}
/** Function to convert a ipv4 to hexadecimal */
function ipv42hex(ipv4) {
    let ipv4_array = ipv4.split('.');
    let ipv4_hex = '';
    for (let i = 0; i < ipv4_array.length; i++) {
        ipv4_hex += pad(ipv4_array[i].toString(16), 2);
    }
    return ipv4_hex;
}
/** Function to convert a ipv4 to binary */
function ipv42bin(ipv4) {
    let ipv4_array = ipv4.split('.');
    let ipv4_bin = '';
    for (let i = 0; i < ipv4_array.length; i++) {
        ipv4_bin += pad(ipv4_array[i].toString(2), 8);
    }
    return ipv4_bin;
}
/** Function to convert a decimal to ipv4 */
function dec2ipv4(ipv4_dec) {
    let ipv4_array = [];
    for (let i = 0; i < 4; i++) {
        ipv4_array.push(Math.floor(ipv4_dec / Math.pow(256, (3 - i))));
        ipv4_dec = ipv4_dec % Math.pow(256, (3 - i));
    }
    return ipv4_array.join('.');
}
/** Function to convert a hexadecimal to ipv4 */
function hex2ipv4(ipv4_hex) {
    let ipv4_array = [];
    for (let i = 0; i < 4; i++) {
        ipv4_array.push(parseInt(ipv4_hex.substring(i * 2, (i + 1) * 2), 16));
    }
    return ipv4_array.join('.');
}
/** Function to convert a binary to ipv4 */
function bin2ipv4(ipv4_bin) {
    let ipv4_array = [];
    for (let i = 0; i < 4; i++) {
        ipv4_array.push(parseInt(ipv4_bin.substring(i * 8, (i + 1) * 8), 2));
    }
    return ipv4_array.join('.');
}
// ----------------------------------------------------------------------------------------------------
/** Function to convert a ipv6 to decimal */
function ipv62dec(ipv6) {
    let ipv6_array = ipv6.split(':');
    let ipv6_dec = 0;
    for (let i = 0; i < ipv6_array.length; i++) {
        ipv6_dec += parseInt(ipv6_array[i], 16) * Math.pow(16, (7 - i));
    }
    return ipv6_dec;
}
/** Function to convert a ipv6 to hexadecimal */
function ipv62hex(ipv6) {
    let ipv6_array = ipv6.split(':');
    let ipv6_hex = '';
    for (let i = 0; i < ipv6_array.length; i++) {
        ipv6_hex += pad(ipv6_array[i], 4);
    }
    return ipv6_hex;
}
/** Function to convert a ipv6 to binary */
function ipv62bin(ipv6) {
    let ipv6_array = ipv6.split(':');
    let ipv6_bin = '';
    for (let i = 0; i < ipv6_array.length; i++) {
        ipv6_bin += pad(ipv6_array[i].toString(2), 16);
    }
    return ipv6_bin;
}
/** Function to convert a decimal to ipv6 */
function dec2ipv6(ipv6_dec) {
    let ipv6_array = [];
    for (let i = 0; i < 8; i++) {
        ipv6_array.push(Math.floor(ipv6_dec / Math.pow(16, (7 - i))).toString(16));
        ipv6_dec = ipv6_dec % Math.pow(16, (7 - i));
    }
    return ipv6_array.join(':');
}
/** Function to convert a hexadecimal to ipv6 */
function hex2ipv6(ipv6_hex) {
    let ipv6_array = [];
    for (let i = 0; i < 8; i++) {
        ipv6_array.push(ipv6_hex.substring(i * 4, (i + 1) * 4));
    }
    return ipv6_array.join(':');
}
/** Function to convert a binary to ipv6 */
function bin2ipv6(ipv6_bin) {
    let ipv6_array = [];
    for (let i = 0; i < 8; i++) {
        ipv6_array.push(parseInt(ipv6_bin.substring(i * 16, (i + 1) * 16), 2));
    }
    return ipv6_array.join(':');
}
// ----------------------------------------------------------------------------------------------------
/** Function to pad a string with zeros */
function pad(str, len) {
    while (str.length < len) {
        str = '0' + str;
    }
    return str;
}
/** Function to reset all fields */
function reset() {
    document.getElementById('ip-field').disabled = false;
    document.getElementById('ip-decimal-field').disabled = false;
    document.getElementById('ip-hexadecimal-field').disabled = false;
    document.getElementById('ip-binary-field').disabled = false;
    document.getElementById('ip-field').value = '';
    document.getElementById('ip-decimal-field').value = '';
    document.getElementById('ip-hexadecimal-field').value = '';
    document.getElementById('ip-binary-field').value = '';
    clearResult();
}
/** Function to clear the output fields */
function clearResult() {
    document.getElementById('ip-to-normal-field').innerText = '';
    document.getElementById('ip-to-decimal-field').innerText = '';
    document.getElementById('ip-to-hexadecimal-field').innerText = '';
    document.getElementById('ip-to-binary-field').innerText = '';
}
// ----------------------------------------------------------------------------------------------------
/** Function to start conversion */
function start_conversion_from(from) {

    let ip;
    let ipv4;
    let ipv6;
    let valid_ipv4;
    let valid_ipv6;
    let valid_ipv4_field = document.getElementById('valid-ipv4-field');
    let valid_ipv6_field = document.getElementById('valid-ipv6-field');
    let ip_format_field = document.getElementsByName('ip-format-field');
    let force_ipv4;
    let force_ipv6;

    for (let i = 0; i < ip_format_field.length; i++) {
        if (ip_format_field[i].checked) {
            force_ipv4 = ip_format_field[i].value == 'ipv4' ? true : false;
            force_ipv6 = ip_format_field[i].value == 'ipv6' ? true : false;
        }
    }
    valid_ipv4_field.checked = false;
    valid_ipv6_field.checked = false;

    if (from == 'ip') {
        ip = document.getElementById('ip-field').value;
        if (ip != '') {
            document.getElementById('ip-field').disabled = false;
            document.getElementById('ip-decimal-field').disabled = true;
            document.getElementById('ip-hexadecimal-field').disabled = true;
            document.getElementById('ip-binary-field').disabled = true;
        } else {
            document.getElementById('ip-field').disabled = false;
            document.getElementById('ip-decimal-field').disabled = false;
            document.getElementById('ip-hexadecimal-field').disabled = false;
            document.getElementById('ip-binary-field').disabled = false;
        }
        valid_ipv4 = is_valid_ipv4(ip);
        valid_ipv6 = is_valid_ipv6(ip);
        if (valid_ipv4 || valid_ipv6) {
            if (valid_ipv4) {
                valid_ipv4_field.checked = true;
                if (force_ipv4) {
                    ipv4 = ip;
                    document.getElementById('ip-to-normal-field').innerText = ipv4;
                    document.getElementById('ip-to-decimal-field').innerText = ipv42dec(ipv4);
                    document.getElementById('ip-to-hexadecimal-field').innerText = ipv42hex(ipv4);
                    document.getElementById('ip-to-binary-field').innerText = ipv42bin(ipv4);
                }
            } else {
                valid_ipv4_field.checked = false;
            }
            if (valid_ipv6) {
                valid_ipv6_field.checked = true;
                if (force_ipv6) {
                    ipv6 = ip;
                    document.getElementById('ip-to-normal-field').innerText = ipv6;
                    document.getElementById('ip-to-decimal-field').innerText = ipv62dec(ipv6);
                    document.getElementById('ip-to-hexadecimal-field').innerText = ipv62hex(ipv6);
                    document.getElementById('ip-to-binary-field').innerText = ipv62bin(ipv6);
                }
            } else {
                valid_ipv6_field.checked = false;
            }
        } else {
            clearResult();
        }

    } else if (from == 'decimal') {
        ip_dec = document.getElementById('ip-decimal-field').value;
        if (ip_dec != '') {
            document.getElementById('ip-field').disabled = true;
            document.getElementById('ip-decimal-field').disabled = false;
            document.getElementById('ip-hexadecimal-field').disabled = true;
            document.getElementById('ip-binary-field').disabled = true;
        } else {
            document.getElementById('ip-field').disabled = false;
            document.getElementById('ip-decimal-field').disabled = false;
            document.getElementById('ip-hexadecimal-field').disabled = false;
            document.getElementById('ip-binary-field').disabled = false;
        }
        valid_ipv4 = is_valid_dec_ipv4(ip_dec);
        valid_ipv6 = is_valid_dec_ipv6(ip_dec);
        if (valid_ipv4 || valid_ipv6) {
            if (valid_ipv4) {
                valid_ipv4_field.checked = true;
                if (force_ipv4) {
                    ipv4 = dec2ipv4(ip_dec);
                    document.getElementById('ip-to-normal-field').innerText = ipv4;
                    document.getElementById('ip-to-decimal-field').innerText = ipv42dec(ipv4);
                    document.getElementById('ip-to-hexadecimal-field').innerText = ipv42hex(ipv4);
                    document.getElementById('ip-to-binary-field').innerText = ipv42bin(ipv4);
                }
            } else {
                valid_ipv4_field.checked = false;
            }
            if (valid_ipv6) {
                valid_ipv6_field.checked = true;
                if (force_ipv6) {
                    ipv6 = dec2ipv6(ip_dec);
                    document.getElementById('ip-to-normal-field').innerText = ipv6;
                    document.getElementById('ip-to-decimal-field').innerText = ipv62dec(ipv6);
                    document.getElementById('ip-to-hexadecimal-field').innerText = ipv62hex(ipv6);
                    document.getElementById('ip-to-binary-field').innerText = ipv62bin(ipv6);
                }
            } else {
                valid_ipv6_field.checked = false;
            }
        } else {
            clearResult();
        }

    } else if (from == 'hexadecimal') {
        ip_hex = document.getElementById('ip-hexadecimal-field').value;
        if (ip_hex != '') {
            document.getElementById('ip-field').disabled = true;
            document.getElementById('ip-decimal-field').disabled = true;
            document.getElementById('ip-hexadecimal-field').disabled = false;
            document.getElementById('ip-binary-field').disabled = true;
        } else {
            document.getElementById('ip-field').disabled = false;
            document.getElementById('ip-decimal-field').disabled = false;
            document.getElementById('ip-hexadecimal-field').disabled = false;
            document.getElementById('ip-binary-field').disabled = false;
        }
        valid_ipv4 = is_valid_hex_ipv4(ip_hex);
        valid_ipv6 = is_valid_hex_ipv6(ip_hex);
        if (valid_ipv4 || valid_ipv6) {
            if (valid_ipv4) {
                valid_ipv4_field.checked = true;
                if (force_ipv4) {
                    ipv4 = hex2ipv4(ip_hex);
                    document.getElementById('ip-to-normal-field').innerText = ipv4;
                    document.getElementById('ip-to-decimal-field').innerText = ipv42dec(ipv4);
                    document.getElementById('ip-to-hexadecimal-field').innerText = ipv42hex(ipv4);
                    document.getElementById('ip-to-binary-field').innerText = ipv42bin(ipv4);
                }
            } else {
                valid_ipv4_field.checked = false;
            }
            if (valid_ipv6) {
                valid_ipv6_field.checked = true;
                if (force_ipv6) {
                    ipv6 = hex2ipv6(ip_hex);
                    document.getElementById('ip-to-normal-field').innerText = ipv6;
                    document.getElementById('ip-to-decimal-field').innerText = ipv62dec(ipv6);
                    document.getElementById('ip-to-hexadecimal-field').innerText = ipv62hex(ipv6);
                    document.getElementById('ip-to-binary-field').innerText = ipv62bin(ipv6);
                }
            } else {
                valid_ipv6_field.checked = false;
            }
        } else {
            clearResult();
        }

    } else if (from == 'binary') {
        ip_bin = document.getElementById('ip-binary-field').value;
        if (ip_bin != '') {
            document.getElementById('ip-field').disabled = true;
            document.getElementById('ip-decimal-field').disabled = true;
            document.getElementById('ip-hexadecimal-field').disabled = true;
            document.getElementById('ip-binary-field').disabled = false;
        } else {
            document.getElementById('ip-field').disabled = false;
            document.getElementById('ip-decimal-field').disabled = false;
            document.getElementById('ip-hexadecimal-field').disabled = false;
            document.getElementById('ip-binary-field').disabled = false;
        }
        valid_ipv4 = is_valid_bin_ipv4(ip_bin);
        valid_ipv6 = is_valid_bin_ipv6(ip_bin);
        if (valid_ipv4 || valid_ipv6) {
            if (valid_ipv4) {
                valid_ipv4_field.checked = true;
                if (force_ipv4) {
                    ipv4 = bin2ipv4(ip_bin);
                    document.getElementById('ip-to-normal-field').innerText = ipv4;
                    document.getElementById('ip-to-decimal-field').innerText = ipv42dec(ipv4);
                    document.getElementById('ip-to-hexadecimal-field').innerText = ipv42hex(ipv4);
                    document.getElementById('ip-to-binary-field').innerText = ipv42bin(ipv4);
                }
            } else {
                valid_ipv4_field.checked = false;
            }
            if (valid_ipv6) {
                valid_ipv6_field.checked = true;
                if (force_ipv6) {
                    ipv6 = bin2ipv6(ip_bin);
                    document.getElementById('ip-to-normal-field').innerText = ipv6;
                    document.getElementById('ip-to-decimal-field').innerText = ipv62dec(ipv6);
                    document.getElementById('ip-to-hexadecimal-field').innerText = ipv62hex(ipv6);
                    document.getElementById('ip-to-binary-field').innerText = ipv62bin(ipv6);
                }
            } else {
                valid_ipv6_field.checked = false;
            }
        } else {
            clearResult();
        }

    }
}