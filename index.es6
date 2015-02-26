let identity = val => val;

export {identity as return};

let bind = (value, f) => {
    if (value == null) return null;
    return f(value);
}

export {bind as bind};

