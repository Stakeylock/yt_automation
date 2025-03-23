from jiniai import JiniAI

jini = JiniAI
session_memory = {}

def generate_prompt(user_input, context):
    return (
        f"You are assisting in video production. Provide structured and relevant responses.\n"
        f"Context:\n{context}\n\n"
        f"User Input:\n{user_input}"
    )

def chat(prompt):
    context = "\n".join(session_memory.get("default_user", []))
    generated_prompt = generate_prompt(prompt, context)
    
    completion = jini.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": generated_prompt}],
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=False,
        stop=None,
    )

    response = completion.choices[0].message.content
    session_memory.setdefault("default_user", []).append(f"User: {prompt}")
    session_memory["default_user"].append(f"AI: {response}")

    return response
