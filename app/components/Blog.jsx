export default function Blog({ title, content }) {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
