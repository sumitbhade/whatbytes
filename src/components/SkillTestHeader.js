export default function SkillTestHeader({ onUpdateClick }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <img src="/html5-logo.svg" alt="HTML5" className="w-16 h-16" />
          <div>
            <h1 className="text-xl font-bold">Hyper Text Markup Language</h1>
            <p className="text-gray-600">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>
        <button
          onClick={onUpdateClick}
          className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-2 rounded-md self-end md:self-auto"
        >
          Update
        </button>
      </div>
    </div>
  );
}
