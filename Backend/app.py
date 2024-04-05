from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []

products = [
    {"id": 1, "name": "Product 1", "description": "Description for Product 1", "price": 10.99, "image": 'images/product1.png'},
    {"id": 2, "name": "Product 2", "description": "Description for Product 2", "price": 20.99, "image": 'images/product2.jpg'},
    {"id": 3, "name": "Product 3", "description": "Description for Product 3", "price": 10.99, "image": 'images/product3.jpg'},
    {"id": 4, "name": "Product 4", "description": "Description for Product 4", "price": 10.99, "image": 'images/product4.jpg'},
    {"id": 5, "name": "Product 5", "description": "Description for Product 5", "price": 10.99, "image": 'images/product5.jpg'},
    {"id": 6, "name": "Product 6", "description": "Description for Product 6", "price": 10.99, "image": 'images/product6.jpg'},
    {"id": 7, "name": "Product 7", "description": "Description for Product 7", "price": 10.99, "image": 'images/product7.jpg'},
    {"id": 8, "name": "Product 8", "description": "Description for Product 8", "price": 10.99, "image": 'images/product8.jpg'},
    {"id": 9, "name": "Product 9", "description": "Description for Product 9", "price": 10.99, "image": 'images/product9.jpg'},
    {"id": 10, "name": "Product 10", "description": "Description for Product 10", "price": 10.99, "image": 'images/product10.jpg'}
]

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    
    if not username or not password or not email:
        return jsonify({'message': 'Missing fields'}), 400
    
    if any(user['username'] == username for user in users):
        return jsonify({'message': 'Username is already taken'}), 400
    
    users.append({'username': username, 'password': password, 'email': email})
    
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    user = next((user for user in users if user['username'] == username and user['password'] == password), None)
    
    if user is not None:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
