def classify_salary(salary):
    position = ""
    if salary <= 2000:
        position = "estagiário"
    elif 2000 < salary <= 5800:
        position = "júnior"
    elif 5800 < salary <= 7500:
        position = "pleno"
    elif 7500 < salary <= 10500:
        position = "senior"
    else:
        position = "líder"
    return position

print(classify_salary(3000))  # saída: júnior

# estruturas de mapeamento (dicts) 

key = "júnior"
classify_salary = {
    "estagiário": "salary < 2000",
    "júnior": "2000 < salary <= 5800",
    "pleno": "5800 < salary <= 7500",
    "senior": "7500 < salary <= 10500",
    "líder": "salary > 10500",
}
print(classify_salary[key])  # saída: 2000 < salary <= 5800