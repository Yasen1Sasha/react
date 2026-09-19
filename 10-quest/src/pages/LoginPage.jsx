export default function LoginPage() {    
    return (
       <div className="max-w-md mx-auto bg-white p-8 
                rounded-xl shadow-sm border border-gray-100, mt-10">
            <h1 className="text-2xl font-bold text-gray-800 
                mb-6 text-center">
                Вхід в систему
            </h1>
            <form className="flex flex-col gap-4">
                <div>
                    <label className="block text-xl font-medium 
                            text-gray-700 mb-1">
                        Email
                    </label>
                    <input type="text" className="w-full border 
                        border-gray-700 rounded-lg px-4 py-2"/>
                </div>
                <div>
                    <label className="block text-xl font-medium 
                            text-gray-700 mb-1">
                        Пароль
                    </label>
                    <input type="password" className="w-full border 
                        border-gray-700 rounded-lg px-4 py-2"/>
                </div>
                <button type="button" className="w-full bg-indigo-600 text-white 
                    font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition mt-2">
                    Увійти
                </button>
            </form>
       </div>       
    );
}