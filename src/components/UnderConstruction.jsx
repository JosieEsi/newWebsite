const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <div className="max-w-lg bg-white shadow-lg p-8 rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800">
          🚧 Page Under Construction 🚧
        </h1>
        <p className="mt-4 text-gray-600">
          We're working hard to bring you something awesome! Check back soon.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 bg-orange text-white font-semibold rounded-lg shadow hover:bg-red transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
