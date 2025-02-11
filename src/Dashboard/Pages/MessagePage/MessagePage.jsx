import { useState, useEffect, useRef } from "react";

const users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "David", email: "david@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "David", email: "david@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "David", email: "david@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "David", email: "david@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
    { name: "David", email: "david@example.com" }
];





const MessagingPage = () => {
    const messagesEndRef = useRef(null);
    const [activeUser, setActiveUser] = useState(users[0]);
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem("messages");
        return savedMessages ? JSON.parse(savedMessages) : {};
    });
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages));
    }, [messages]);

    const sendMessage = () => {
        if (!newMessage.trim()) return;
        setMessages((prev) => {
            const updatedMessages = {
                ...prev,
                [activeUser.email]: [...(prev[activeUser.email] || []), { sender: "You", text: newMessage }]
            };
            localStorage.setItem("messages", JSON.stringify(updatedMessages));
            return updatedMessages;
        });
        setNewMessage("");

        setTimeout(() => {
            const randomMessage = Math.floor(Math.random() * 100).toString();
            setMessages((prev) => {
                const updatedMessages = {
                    ...prev,
                    [activeUser.email]: [...(prev[activeUser.email] || []), { sender: activeUser.name, text: randomMessage }]
                };
                localStorage.setItem("messages", JSON.stringify(updatedMessages));
                return updatedMessages;
            });
        }, Math.floor(Math.random() * 2000) + 1000);
    };



    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [messages, activeUser]);


    return (
        <div className="flex flex-col md:gap-0 gap-10 md:flex-row h-auto md:h-[600px] bg-gray-100">
            {/* Left Sidebar - Users List */}
            <div className="w-full md:w-1/4 bg-white p-4 min-h-[400px]">
                <h2 className="text-lg font-bold mb-4">Users</h2>
                <div className="w-full h-5/6 bg-white border-r  border-gray-300 scrollbar-thin md:overflow-y-auto ">
                    <ul className="">
                        {users.map((user, index) => (
                            <li
                                key={index}
                                className={`p-2 mb-2 border-b flex items-center space-x-3 cursor-pointer transition ${activeUser.email === user.email ? "bg-gray-300" : "hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveUser(user)}
                            >
                                <img
                                    src="https://cdn.pixabay.com/photo/2016/09/28/08/28/art-1699977_640.jpg"
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="text-sm font-semibold ">{user.name}</p>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Messaging Area */}
            <div className="flex w-full flex-col flex-1 bg-white">
                <div className="p-4">
                    <h1 className="text-xl font-bold">Messages</h1>

                </div>
                <div className="flex-1 overflow-y-auto scrollbar-thin  p-4 border border-gray-300 rounded-lg">
                    <div>
                        {(messages[activeUser.email] || []).map((msg, index) => (
                            <div key={index} className={`flex items-start mb-2 ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                                {msg.sender !== "You" && (
                                    <img src={msg.receiverImage} alt="Receiver" className="w-8 h-8 rounded-full mr-2" />
                                )}
                                <div className={`p-2 rounded-lg max-w-xs ${msg.sender === "You" ? "bg-blue-700 text-white" : "bg-gray-200 text-black"}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                                {msg.sender === "You" && (
                                    <img src={msg.senderImage} alt="Sender" className="w-8 h-8 rounded-full ml-2" />
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Scroll to this div */}
                    <div ref={messagesEndRef} />
                </div>



                {/* Input Box */}
                <div className="flex items-center my-2 bg-white">
                    <textarea
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 border h-20 rounded-lg p-2 focus:outline-none"
                        value={newMessage}

                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Send
                    </button>
                </div>
            </div>

            {/* Right Sidebar - User Info Card */}
            <div className="hidden md:flex w-full md:w-1/4 bg-white p-4  border-gray-300 flex-col items-start">
                <h1 className="text-xl mb-4 font-bold">Messages</h1>

                <div className="text-center">
                    <img
                        src="https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="User"
                        className=" mb-4"
                    />
                    <h3 className="text-lg font-semibold">Job Nme: {activeUser.name}</h3>
                    <p className="text-gray-600">User Info</p>
                    <div className="mt-4 text-center">
                        <p><strong>Email:</strong> {activeUser.email}</p>
                        <p><strong>Phone:</strong> +1234567890</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default MessagingPage;
