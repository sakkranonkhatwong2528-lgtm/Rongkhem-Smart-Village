function search(data, keyword){

return data.filter(item=>

JSON.stringify(item)

.toLowerCase()

.includes(keyword.toLowerCase())

);

}
