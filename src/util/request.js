import axios from 'axios'
import qs from 'qs'
import {Loading, Message} from 'element-ui'

const method = ['get','post', 'delete', 'put','head']
const request = {}
for(let item of method){
	request[item] = ({url, data, params, contentType = 'application/x-www-form-urlencoded', hideLoading = false, removeEmpty = true}) => {
		return new Promise((resolve, reject) => {
			let loadingInstance
			if(!hideLoading) {
				loadingInstance = Loading.service({
					text: '加载中'
				})
			}
			let config = {
				method: item,
				url,
				headers: {'Content-Type': contentType},
				paramsSerializer: function(params) {
					return qs.stringify(params)
				}
			}
			if(data){
				if(removeEmpty){
					removeEmptyProp(data)
				}
				if(contentType==='application/json'){
					config.data = data
				}else{
					config.data = qs.stringify(data)
				}
			}
			if(params){
				if(removeEmpty){
					removeEmptyProp(params)
				}
				config.params = params
			}
			if(item === 'get'){
				if(config.params){
					Object.assign(config.params, {_rnd: Math.random()})
				}
				else{
					config.params = {
						_rnd: Math.random()
					}
				}
			}
			axios(config).then(({data}) => {
				if(data.code === '-1'){
					location.href = data.data
				}
				resolve(data)
			}).catch(err => {
				if(err.response) {
					Message({
						message: err.response.data.msg || '发生异常，请重试',
						type: 'warning'
					})
				}
				else{
					Message({
						message: '未连接到互联网，请检查',
						type: 'warning'
					})
				}
				reject(err)
			}).finally(() =>{
				if(loadingInstance){
					setTimeout(()=>{
						loadingInstance.close()
					}, 200)
				}
			})
		})
	}
}

request['postFile'] = ({url, formData, hideLoading = false}) => {
	return new Promise((resolve, reject) => {
		let loadingInstance
		if(!hideLoading) {
			loadingInstance = Loading.service({
				text: '加载中'
			})
		}
		axios.post(url, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(({data}) => {
			if(data.code === '-1'){
				location.href = data.data
			}
			else{
				resolve(data)
			}
		}).catch((err) => {
			Message.error('上传失败')
			reject(err)
		}).finally(()=>{
			if(loadingInstance){
				setTimeout(()=>{
					loadingInstance.close()
				}, 200)
			}
		})
	})
}

function removeEmptyProp(data) {
	if(typeof data === 'object'){
		if(Array.isArray(data)){
			for(let item of data){
				removeEmptyProp(item)
			}
		}
		else{
			for(let key in data){
				if(data[key] === null || data[key] === undefined || data[key] === ''){
					delete data[key]
				}
				else if(typeof data[key] === 'object'){
					if(Object.keys(data[key]).length === 0){
						delete data[key]
					}
					else {
						removeEmptyProp(data[key])
					}
				}
			}
		}
	}
}

export default request
