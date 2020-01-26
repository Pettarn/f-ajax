function FAjax (options) {
    let method = options.method
    let url = options.URL
    let async = options.async
    let data = formatParams(options.data)
    let success = options.success || undefined
    let fail = options.fail || undefined

    let xhr = null

    if (!window.XMLHttpRequest) {
        xhr = new ActivvexObject()
    } else {
        xhr = new XMLHttpRequest()
    }

    if (method === 'GET') {
        xhr.open(method, url+"?"+data, async)
        xhr.send(null)
    } else if (method === 'POST') {
        xhr.open(method, url, async)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(data)
    }

    xhr.onload = function () {
        success(this.response)
    }
    xhr.onerror = fail

    function formatParams (data) {
        let arr = []
        for (let key in data) {
            arr.push(key + '=' + data[key])
        }
        return arr.join('&')
    }
}

export default FAjax