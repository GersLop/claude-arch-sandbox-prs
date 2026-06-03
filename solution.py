def is_even(n):
    if not isinstance(n, int) or isinstance(n, bool):
        raise TypeError("Input must be an integer.")
    return n % 2 == 0