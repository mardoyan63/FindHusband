export default class API{
    static async getInfo() {
        let params = {
            action: 'getInfo',
            id: '152'
        }
        let formData = new FormData()
        for (var k in params) {
            formData.append(k, params[k]);
        }
    
        try {
            let data = await fetch("http://pastryvalley.com/loveleak/index.php",
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/x-www-form-urlencoded',
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                });
                let result = await data.json();
                console.log(result);  
                return result;
        }
        catch (error) {
            console.log(error);
        }
    }
}
 