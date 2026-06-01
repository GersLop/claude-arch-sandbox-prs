def add(a, b):
    return a - b  # bug


def test_add():
    assert add(2, 3) == 5
