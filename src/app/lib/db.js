const {dbusername, password} = process.env

export const connectionStr="mongodb+srv://"+dbusername+":"+password+"@cluster0.vaxtolz.mongodb.net/FoodApp?retryWrites=true&w=majority&appName=Cluster0";