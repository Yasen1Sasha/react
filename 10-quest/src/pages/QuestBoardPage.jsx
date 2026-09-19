import { Link } from "react-router-dom";

// тимчасово поки не підключена БД
const MOCK_QUESTS = [
  { id: 1, title: "Таємниця кабінету фізики", author: "Макс", desc: "Знайди ключ від сейфа, використовуючи закони оптики.", xp: 50 },
  { id: 2, title: "Зниклий журнал", author: "Анна", desc: "Хтось сховав класний журнал. Розкрий серію шифрів у бібліотеці.", xp: 30 },
  { id: 3, title: "Вірус у серверній", author: "Admin", desc: "Шкільний сервер зламано. Віднови доступ за допомогою логічних команд.", xp: 100 },
];


export default function QuestBoardPage() {    
    return (
       <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Доступні квести
        </h1>
        {/*Сітка: 1 колонка на мобільних 2-на планшетах, 3 на ПК*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_QUESTS.map((quest) => (
                <div key={quest.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition">
                    <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                        {quest.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                        Автор:
                        <span className="font-medium text-gray-700 ml-1">{quest.author}</span>
                    </p>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                        {quest.desc}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="">+{quest.xp} XP</span>
                        <Link to={`/quest/${quest.id}`} 
                        className="">
                            Грати
                        </Link>
                    </div>
                </div>
            ))}
        </div>
       </div>
    );
}