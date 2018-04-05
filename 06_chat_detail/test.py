


def sort_arr(arr):
	return sorted(arr,key=lambda x:int(x[1]),reverse=True)[:10]

res_arr = map(sort_arr,[list_load,list_free,list_io_r,list_io_w])
html_test = html_count(*res_arr)