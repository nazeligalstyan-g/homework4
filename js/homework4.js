

// task 3 triangle stars

//upside-down triangle

const triangle = function(n){
    if(n<=0){
        return;
    }
    const helper = function(n, sp, str){
        if(n<=0){
            return;
        }
        const spaces = function(sp){
            if(sp<=0){
                return '';
            }
            return ' ' + spaces(sp-1);
        };
        const stars = function(str){
            if(str<=0){
                return '';
            }
            return '*' + stars(str-1);
        };

        console.log(spaces(sp) + stars(str));
        helper(n-1, sp+1, str-2);
    };

    return helper(n, 0, 2*n-1);

};
triangle(n);


// normal triangle
const triangle = function(n){
    if(n<=0){
        return ;
    }
    const helper = function(n, sp, str){
        if(n<=0){
            return;
        }
        const spaces = function(sp){
            if(sp<=0){
                return '';
            }
            return ' ' + spaces(sp-1);
        };
        const stars = function(str){
            if(str<=0){
                return '';
            }
            return '*' + stars(str-1);
        };

        console.log(spaces(sp) + stars(str));
        helper(n-1, sp-1, str+2);
    };

    return helper(n, n-1, 1);

};
triangle(n);


// task 4 pow

const pow = function(a,n){
    if(n<=0){
        return 1 ;
    }else if(a> 0 && n>0){
        return a* + pow(a, n-1)
    }
};

console.log(pow(2,4));



// task 5 reverses a string using recursion

const reverseStr = function(str){
    if(typeof(str)!== 'string'){
        return;
    }

    const helper = function(str, i){
        if(i<0){
            return '';
        }
        return str[i]+ helper(str, i-1)
    };
    return helper(str, str.length-1);
};

console.log(reverseStr('abcd'));


//task 6 draw a checkerboard

const checkerboard = function(n){
    if(n<=0){
        return;
    }
    const helper = function(n, str){
        if(n<=0){
            return;
        }
        const row1 = function(str){
            if(str<=0){
                return '';
            }
            return '* ' + row1(str-1);
        };
        const row2 = function(str){
            if(str<=0){
                return '';
            }
            return ' *' + row2(str-1);
        };
        if(n%2===0){
            console.log(row2(str));
            helper(n-1, str);
        }else{
            console.log(row1(str));
            helper(n-1, str);
        }
    };

    return helper(n, n);
};

checkerboard(n);


// Extra credit / draw a boat

const boat = function(h){
    const spaces = function(sp){
        if(sp<=0){
            return '';
        }
        return ' ' + spaces(sp-1);
    };
    const stars = function(str){
        if(str<=0){
            return '';
        }
        return '*' + stars(str-1);
    };

    const triangle = function(h, sp, str){
        if(h<=0){
            return '';
        };
        console.log(spaces(sp) + stars(str));
        triangle(h-1, sp-1, str+1);
    };
    const rectangle = function(h, sp, str){
        if(h<=0){
            return '';
        };
        console.log(spaces(sp) + stars(str));
        rectangle(h-1, sp, str);
    };
    const body = function(h, sp, str){
        if(h<=0){
            return '';
        }
        console.log(spaces(sp) + stars(str));
        body(h-1, sp+1, str-2);
    };
    triangle(h/2,4*h-2, 1);
    rectangle(h/6, (6*h-3)/2, 2*h-1);
    body(h/3, 0, 8*h-4);

};

boat(h);



















