This project implements a simplified version of Shamir's Secret Sharing Algorithm to find the constant term (also known as the secret) in a polynomial. The code reads points encoded in different bases from JSON files, decodes them, and uses Lagrange Interpolation to determine the constant term of the polynomial.

**Problem Explanation**
The goal is to calculate the constant term c in an unknown polynomial of degree 
𝑚
m represented by points provided in a JSON format. We are given the encoded points in the following format:

Number of Roots (n): Total points available to determine the polynomial.
Minimum Points (k): Minimum points required to solve for the polynomial’s coefficients, where 
k=m+1, and 
𝑚
m is the degree of the polynomial.
**The polynomial is expressed as: **
𝑓(𝑥)=𝑎𝑚⋅𝑥𝑚+𝑎𝑚−1⋅𝑥𝑚−1+…+𝑎1⋅𝑥+𝑐f(x)=a m⋅x m +a m−1​⋅x m−1 +…+a 1⋅x+c

Each point represents (x, y) values, where:

x is the key in the JSON object.
y is encoded in different bases and decoded before being used.
The task is to:

Parse the points from JSON.
Decode each y-value from its specified base.
Use the points to compute the constant term c using Lagrange interpolation.
