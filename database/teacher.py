import openpyxl  

wb=openpyxl.load_workbook('./teacher.xlsx')  
sheet=wb.active 

cellemail='C'

email=[]

for i in range(2,sheet.max_row+1):        
 app=sheet[cellemail+str(i)].value
 email.append(app)

print(email)